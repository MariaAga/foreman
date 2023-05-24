import React from 'react';
import PropTypes from 'prop-types';
import { ChartDonut } from '@patternfly/react-charts';
import MessageBox from '../../MessageBox';
import { translate as __ } from '../../../../../react_app/common/I18n';
import { noop } from '../../../../common/helpers';
import { getTitle } from './helpers';

const DonutChart = ({
  data,
  onclick: _onClick,
  config,
  noDataMsg,
  title,
  unloadData,
  searchUrl,
  searchFilters,
}) => {
  const navigateToSearch = (url, val) => {
    let setUrl;

    window.tfm.tools.showSpinner();

    if (url.includes('~VAL1~') || url.includes('~VAL2~')) {
      const vals = val.split(' ');

      const val1 = encodeURIComponent(vals[0]);
      const val2 = encodeURIComponent(vals[1]);

      setUrl = url.replace('~VAL1~', val1).replace('~VAL2~', val2);
    } else {
      if (val.includes(' ')) {
        val = encodeURIComponent(val);
      }
      setUrl = url.replace('~VAL~', val);
    }
    window.location.href = setUrl;
  };
  if (data.length > 0) {
    const chartData = data.map(item => ({
      x: item[0],
      y: item[1],
      searchFilters: searchFilters[item[0]],
    }));
    return (
      <ChartDonut
        constrainToVisibleArea
        labels={({ datum }) => {
          // console.log(datum);
          return `${datum.x}: ${datum.y}`;
        }} // todo fix
        events={[
          {
            target: 'data',
            eventHandlers: {
              onClick: () => {
                return [
                  {
                    target: 'data',
                    mutation: ({ style, ..._props }) => {
                      if (_onClick) _onClick(_props);
                      if (searchUrl)
                        navigateToSearch(searchUrl, _props.datum.searchFilters);
                    },
                  },
                ];
              },
            },
          },
        ]}
        name="chart1"
        data={chartData}
        {...getTitle(title, data)}
        // themeColor={ChartThemeColor.multiOrdered}
        colorScale={data.map(item => item[2])}
        // unloadBeforeLoad={unloadData}
      />
    );
  }
  return <MessageBox msg={noDataMsg} icontype="info" />;
};

DonutChart.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  config: PropTypes.oneOf(['regular', 'medium', 'large']),
  noDataMsg: PropTypes.string,
  title: PropTypes.object,
  unloadData: PropTypes.bool,
  onclick: PropTypes.func,
  searchUrl: PropTypes.string,
  searchFilters: PropTypes.object,
};

DonutChart.defaultProps = {
  data: undefined,
  config: 'regular',
  noDataMsg: __('No data available'),
  title: { type: 'percent', precision: 1 },
  unloadData: false,
  onclick: noop,
  searchUrl: undefined,
  searchFilters: undefined,
};

export default DonutChart;
