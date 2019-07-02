import Immutable from 'seamless-immutable';

export const createApiReducer = outputType => (
  state = initialState,
  action
) => {};

const initialState = Immutable({});

export default (state = initialState, action) => {
  const { type, payload } = action;
  const outputType = payload.outputType || '';
  switch (type) {
    case `${outputType}_STOP_POLLING`:
      if (payload.timeoutId) {
        clearTimeout(payload.timeoutId);
      }
      return state.merge({ reload: false, timeoutId: null });
    case `${outputType}_START_POLLING`:
      return state.merge({
        outputType: { reload: true, timeoutId: payload.timeoutId },
      });
    default:
      return state;
  }
};

const myReducer = createApiReducer('STATISTICS');
