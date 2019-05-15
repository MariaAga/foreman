import { ajaxRequestAction } from './ajaxRequestAction';
import API from '../../API';
import IntegrationTestHelper from '../../common/IntegrationTestHelper';

const data = { results: [1] };
const payload = { name: 'test', id: 'myid' };
jest.mock('../../API');

describe('ajaxRequestAction', () => {
  const store = { dispatch: jest.fn() };

  beforeEach(() => {
    store.dispatch = jest.fn();
  });

  it('should dispatch request and success actions on resolve', async () => {
    API.get.mockImplementation(
      url =>
        new Promise((resolve, reject) => {
          resolve({ data });
        })
    );
    const url = 'test/subtest';
    ajaxRequestAction(store)(jest.fn())({
      type: 'API_GET',
      subtype: 'TEST',
      payload,
      url,
    });
    await IntegrationTestHelper.flushAllPromises();
    expect(store.dispatch.mock.calls).toMatchSnapshot();
  });

  it('should dispatch request and failure actions on reject', async () => {
    API.get.mockImplementation(
      url =>
        new Promise((resolve, reject) => {
          reject(Error('bad request'));
        })
    );
    const url = 'test/subtest';
    ajaxRequestAction(store)(jest.fn())({
      type: 'API_GET',
      subtype: 'TEST',
      payload,
      url,
    });
    await IntegrationTestHelper.flushAllPromises();
    expect(store.dispatch.mock.calls).toMatchSnapshot();
  });
});
