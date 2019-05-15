import { STATISTICS_DATA } from '../../consts';

export const getStatisticsData = charts => dispatch => {
  charts.forEach(chart => {
    dispatch({
      type: 'API_GET',
      subtype: STATISTICS_DATA,
      url: chart.url,
      payload: chart,
    });
  });
};
