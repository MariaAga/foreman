import API from '../../API';

const get = (payload, url, store, consts) => {
  store.dispatch({
    type: consts.REQUEST,
    payload,
  });
  API.get(url, payload.headers || {}, payload.params || {})
    .then(({ data }) => {
      store.dispatch({
        type: consts.SUCCESS,
        payload: { ...payload, ...data },
      });
    })
    .catch(error => {
      store.dispatch({
        type: consts.FAILURE,
        payload: { error, payload },
      });
    });
};

export const ajaxRequestAction = store => next => action => {
  const { type = null, subtype, payload = {}, url, consts = {} } = action;
  if (type === 'API_GET') {
    consts.REQUEST = consts.REQUEST || `${subtype}_REQUEST`;
    consts.SUCCESS = consts.SUCCESS || `${subtype}_SUCCESS`;
    consts.FAILURE = consts.FAILURE || `${subtype}_FAILURE`;
    get(payload, url, store, consts);
  }
  next(action);
};
