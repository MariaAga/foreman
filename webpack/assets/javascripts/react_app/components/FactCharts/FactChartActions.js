import {
  FACT_CHART,
  FACT_CHART_MODAL_OPEN,
  FACT_CHART_MODAL_CLOSE,
} from './FactChartConstants';

export const getChartData = (url, id) => ({
  type: 'API_GET',
  subtype: FACT_CHART,
  url,
  payload: { id },
});
export const showModal = (id, title) => {
  const showModalAction = {
    type: FACT_CHART_MODAL_OPEN,
    payload: { id, title },
  };
  return showModalAction;
};

export const closeModal = id => {
  const closeModalAction = { type: FACT_CHART_MODAL_CLOSE, payload: { id } };
  return closeModalAction;
};
