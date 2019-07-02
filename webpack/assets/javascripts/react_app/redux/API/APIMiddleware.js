import { API_OPERATIONS, actionTypeGenerator } from './';
import { get } from './APIRequest';

export const APIMiddleware = store => next => action => {
  const { type, outputType, payload = {}, url, actionTypes = {} } = action;
  if (type === API_OPERATIONS.GET) {
    get(payload, url, store, actionTypeGenerator(outputType, actionTypes));
  } else if (type === '_START_POLLING') {
    pollingStart(
      payload.timeoutId,
      outputType,
      payload.APIParams,
      payload.interval
    );
  } else if (type === '_STOP_POLLING') {
    pollingStart(
      payload.timeoutId,
      outputType,
      payload.APIParams,
      payload.interval
    );
  } else {
    next(action);
  }
};

export const pollingStop = (timeoutId, outputType) => ({
  type: `${outputType}_STOP_POLLING`,
  payload: { timeoutId, outputType },
});

export const pollingStart = (
  timeoutId,
  outputType,
  APIParams,
  interval = 5000
) => dispatch => {
  if (!timeoutId) {
    timeoutId = setInterval(() => getData(APIParams, outputType), interval);
  }
  dispatch({
    type: `${outputType}_START_POLLING`,
    payload: { timeoutId },
  });
};

const getData = (APIParams, outputType) => ({
  type: API_OPERATIONS.GET,
  outputType,
  ...APIParams,
});
