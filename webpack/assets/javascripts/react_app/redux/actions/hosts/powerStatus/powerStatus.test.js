import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import immutable from 'seamless-immutable';
import {
  requestData,
  onFailureActions,
  onSuccessActions,
} from './powerStatus.fixtures';
import * as actions from './index';
import { ajaxRequestAction } from '../../../middlewares/ajaxRequestAction';
import IntegrationTestHelper from '../../../../common/IntegrationTestHelper';
import API from '../../../../API';

jest.mock('../../../../API');
const mockStore = configureMockStore([thunk, ajaxRequestAction]);
const store = mockStore({
  hosts: {
    powerStatus: immutable({}),
  },
});

afterEach(() => {
  store.clearActions();
});
describe('hosts actions', () => {
  it('creates HOST_POWER_STATUS_REQUEST and fails when host not found', async () => {
    API.get.mockImplementationOnce(
      url =>
        new Promise((resolve, reject) => {
          reject(Error('Request failed with status code 500'));
        })
    );
    store.dispatch(actions.getHostPowerState(requestData.failRequest));
    await IntegrationTestHelper.flushAllPromises();
    expect(store.getActions()).toEqual(onFailureActions);
  });
  it('creates HOST_POWER_STATUS_REQUEST and responds with success', async () => {
    API.get.mockImplementationOnce(
      url =>
        new Promise((resolve, reject) => {
          resolve({
            url: requestData.successRequest.url,
            data: {
              id: 1,
              state: 'na',
              title: 'N/A',
            },
          });
        })
    );
    store.dispatch(actions.getHostPowerState(requestData.successRequest));
    await IntegrationTestHelper.flushAllPromises();
    expect(store.getActions()).toEqual(onSuccessActions);
  });
});
