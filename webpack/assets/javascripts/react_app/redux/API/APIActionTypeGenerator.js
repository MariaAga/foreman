const actions = ['REQUEST', 'SUCCESS', 'FAILURE'];

/**
 * Auto generates api consts for redux for given subtype
 * @param {String} subtype - the name of the component
 * @param {Object} actionTypes - custom types to use instead of the auto generated ones
 */
export const actionTypeGenerator = (subtype, actionTypes = {}) => {
  actions.forEach(type => {
    actionTypes[type] = actionTypes[type] || `${subtype}_${type}`;
  });
  return actionTypes;
};
