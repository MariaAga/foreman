import { API_OPERATIONS, actionTypeGenerator } from './';
import { get } from './APIRequest';

export const APIMiddleware = store => next => action => {
  const { type, outputType, payload = {}, url, actionTypes = {} } = action;
  if (type === API_OPERATIONS.GET) {
    get(payload, url, store, actionTypeGenerator(outputType, actionTypes));
  } else {
    next(action);
  }
};
