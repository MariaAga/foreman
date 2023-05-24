import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  Chart,
  ChartBar,
  getResizeObserver,
  ChartAxis,
} from '@patternfly/react-charts';
import { getBarChartConfig } from '../../../../../services/charts/BarChartService';
import { noop } from '../../../../common/helpers';
import { translate as __ } from '../../../../common/I18n';
import MessageBox from '../../MessageBox';

const BarChart = ({
  data,
  onclick,
  noDataMsg,
  config,
  xAxisLabel,
  yAxisLabel,
}) => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const handleResize = () => {
    if (containerRef.current && containerRef.current.clientWidth) {
      setWidth(containerRef.current.clientWidth);
    }
  };
  useEffect(() => {
    const observer = getResizeObserver(containerRef.current, handleResize);
    handleResize();
    return () => {
      observer();
    };
  }, []);

  const chartConfig = getBarChartConfig({
    data,
    config,
    onclick,
    xAxisLabel,
    yAxisLabel,
  });

  if (chartConfig.data.columns.length > 0) {
    const chartData = data.map(item => ({ x: item[0], y: item[1] }));
    return (
      <div ref={containerRef}>
        <Chart width={width}>
          <ChartAxis label={xAxisLabel} />
          <ChartAxis label={yAxisLabel} dependentAxis />
          <ChartBar data={chartData} />
        </Chart>
      </div>
    );
  }
  return <MessageBox msg={noDataMsg} icontype="info" />;
};

BarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array),
  onclick: PropTypes.func,
  noDataMsg: PropTypes.string,
  config: PropTypes.string,
  xAxisLabel: PropTypes.string,
  yAxisLabel: PropTypes.string,
};

BarChart.defaultProps = {
  data: null,
  onclick: noop,
  noDataMsg: __('No data available'),
  config: 'regular',
  yAxisLabel: '',
  xAxisLabel: '',
};

export default BarChart;
