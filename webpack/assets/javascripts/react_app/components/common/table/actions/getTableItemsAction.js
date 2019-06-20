import URI from 'urijs';
import { API_OPERATIONS } from './../../../../redux/API';
/**
 * An async Redux action that fetches and stores table data in Redux.
 * @param  {String} controller the controller name
 * @param  {Object} query      the API request query
 * @return {Function}          Redux Thunk function
 */
const getTableItemsAction = (controller, query) => {
  const url = new URI(`/api/${controller}`);
  url.addSearch({ ...query, include_permissions: true });

  return {
    type: API_OPERATIONS.GET,
    outputType: `${controller.toUpperCase()}_TABLE`,
    url: url.toString(),
    payload: { controller, url: url.toString() },
  };
};

export default getTableItemsAction;
