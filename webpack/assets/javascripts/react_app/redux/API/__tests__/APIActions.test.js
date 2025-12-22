import { APIActions } from '../APIActions';
import { API_OPERATIONS } from '../APIConstants';
import {
  key,
  url,
  params,
  headers,
  payload,
  actionTypes,
} from '../APIFixtures';

describe('API actions', () => {
  it('should call the API get action', () => {
    const action = APIActions.get({ key, url, params, headers, payload, actionTypes });

    expect(action).toEqual({
      type: API_OPERATIONS.GET,
      payload: {
        actionTypes,
        headers,
        key,
        params,
        payload,
        url,
      },
    });
  });

  it('should call the API post action', () => {
    const action = APIActions.post({ key, url, params, headers, payload, actionTypes });

    expect(action).toEqual({
      type: API_OPERATIONS.POST,
      payload: {
        actionTypes,
        headers,
        key,
        params,
        payload,
        url,
      },
    });
  });

  it('should call the API put action', () => {
    const action = APIActions.put({ key, url, params, headers, payload, actionTypes });

    expect(action).toEqual({
      type: API_OPERATIONS.PUT,
      payload: {
        actionTypes,
        headers,
        key,
        params,
        payload,
        url,
      },
    });
  });

  it('should call the API patch action', () => {
    const action = APIActions.patch({ key, url, params, headers, payload, actionTypes });

    expect(action).toEqual({
      type: API_OPERATIONS.PATCH,
      payload: {
        actionTypes,
        headers,
        key,
        params,
        payload,
        url,
      },
    });
  });

  it('should call the API delete action', () => {
    const action = APIActions.delete({ key, url, headers, payload, actionTypes });

    expect(action).toEqual({
      type: API_OPERATIONS.DELETE,
      payload: {
        actionTypes,
        headers,
        key,
        payload,
        url,
      },
    });
  });
});
