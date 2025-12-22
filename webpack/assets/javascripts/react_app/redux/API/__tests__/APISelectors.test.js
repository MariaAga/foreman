import {
  selectAPI,
  selectAPIByKey,
  selectAPIStatus,
  selectAPIError,
  selectAPIErrorMessage,
  selectAPIResponse,
  selectAPIPayload,
} from '../APISelectors';
import { key, payload, data, error } from '../APIFixtures';
import { STATUS } from '../../../constants';

const successState = {
  API: {
    [key]: {
      payload,
      response: data,
      status: STATUS.RESOLVED,
    },
  },
};

const failureState = {
  API: {
    [key]: {
      payload,
      response: error,
      status: STATUS.ERROR,
    },
  },
};

describe('API selectors', () => {
  it('should return the API wrapper', () => {
    const result = selectAPI(successState);
    expect(result).toEqual({
      [key]: {
        payload,
        response: data,
        status: STATUS.RESOLVED,
      },
    });
  });

  it('should return the API substate by key', () => {
    const result = selectAPIByKey(successState, key);
    expect(result).toEqual({
      payload,
      response: data,
      status: STATUS.RESOLVED,
    });
  });

  it('should return the API substate status', () => {
    const result = selectAPIStatus(successState, key);
    expect(result).toBe(STATUS.RESOLVED);
  });

  it('should return the API substate response', () => {
    const result = selectAPIResponse(successState, key);
    expect(result).toEqual(data);
  });

  it('should return the API substate payload', () => {
    const result = selectAPIPayload(successState, key);
    expect(result).toEqual(payload);
  });

  it('should return the API substate error', () => {
    const result = selectAPIError(failureState, key);
    expect(result).toBe(error);
  });

  it('should return the API substate error message', () => {
    const result = selectAPIErrorMessage(failureState, key);
    expect(result).toBe('some_error');
  });
});
