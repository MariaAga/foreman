import reducer from '../APIReducer';
import { middlewareActions } from '../APIFixtures';
import { STATUS } from '../../../constants';
import { key, payload, data, error } from '../APIFixtures';

describe('API reducer', () => {
  it('should return the initial state', () => {
    const result = reducer(undefined, {});
    expect(result).toEqual({});
  });

  it('should handle API request action', () => {
    const result = reducer(undefined, middlewareActions.request);
    expect(result).toEqual({
      [key]: {
        payload,
        response: null,
        status: STATUS.PENDING,
      },
    });
  });

  it('should handle API success action', () => {
    const result = reducer(undefined, middlewareActions.success);
    expect(result).toEqual({
      [key]: {
        payload,
        response: data,
        status: STATUS.RESOLVED,
      },
    });
  });

  it('should handle API failure action', () => {
    const result = reducer(undefined, middlewareActions.failure);
    expect(result).toEqual({
      [key]: {
        payload,
        response: error,
        status: STATUS.ERROR,
      },
    });
  });

  it.only("should handle update response's content", async () => {
    const initialState = reducer(undefined, middlewareActions.success);
    const result = reducer(initialState, middlewareActions.update);
    expect(result).toEqual({
      [key]: {
        ...initialState[key],
        response: 'UPDATED CONTENT',
      },
    });
  });
});
