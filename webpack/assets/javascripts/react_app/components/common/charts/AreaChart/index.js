import React from 'react';
import PropTypes from 'prop-types';
import {
  Chart,
  ChartStack,
  ChartLegendTooltip,
  createContainer,
  ChartArea,
  ChartAxis,
  ChartThemeColor,
} from '@patternfly/react-charts';
import { noop } from '../../../../common/helpers';
import { translate as __ } from '../../../../common/I18n';
import MessageBox from '../../MessageBox';
import { getChartConfig } from '../../../../../services/charts/ChartService';

const AreaChart = ({
  data,
  onclick,
  noDataMsg,
  config,
  xAxisDataLabel,
  yAxisLabel,
  size,
}) => {
  const CursorVoronoiContainer = createContainer('voronoi', 'cursor');
  const chartConfig = getChartConfig({
    type: 'area',
    config,
    data,
    onclick,
  });
  if (config === 'timeseries' && !xAxisDataLabel) {
    // eslint-disable-next-line no-console
    console.warn('xAxisDataLabel is missing for timeseries area graph');
  }

  const legendData = data.map(item => ({
    childName: item[0],
    name: item[0],
  }));

  const indexToRemove = data.findIndex(item => item[0] === xAxisDataLabel);
  let xAxis = [];
  if (indexToRemove !== -1) {
    xAxis = data.splice(indexToRemove, 1)[0].slice(1);
  }
  if (xAxis.length > 0) {
    Object.keys(xAxis).forEach(key => {
      xAxis[key] = `${new Date(xAxis[key] * 1000).toLocaleDateString()}\n\
${new Date(xAxis[key] * 1000).toLocaleTimeString()}`;
    });
    const chartsData = data.map(item => {
      const name = item[0];
      return item.slice(1).map((y, i) => ({ name, x: xAxis[i], y }));
    });
    return (
      <Chart
        containerComponent={
          <CursorVoronoiContainer
            cursorDimension="x"
            labels={({ datum }) => `${datum.y !== null ? datum.y : 'no data'}`}
            labelComponent={
              <ChartLegendTooltip
                legendData={legendData}
                title={datum => datum.x}
              />
            }
            mouseFollowTooltips
            voronoiDimension="x"
            voronoiPadding={50}
          />
        }
        legendData={legendData}
        legendOrientation="vertical"
        legendPosition="right"
        padding={{
          bottom: 50,
          left: 100,
          right: 200,
          top: 50,
        }}
        width={800}
        themeColor={ChartThemeColor.multiOrdered}
        {...size}
      >
        <ChartAxis />
        <ChartAxis label={yAxisLabel} dependentAxis showGrid />
        <ChartStack>
          {chartsData.map((chartData, i) => (
            <ChartArea key={i} data={chartData} name={chartData[0]?.name} />
          ))}
        </ChartStack>
      </Chart>
    );
  }
  return <MessageBox msg={noDataMsg} icontype="info" />;
};

AreaChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array),
  onclick: PropTypes.func,
  noDataMsg: PropTypes.string,
  config: PropTypes.oneOf(['timeseries']),
  xAxisDataLabel: PropTypes.string,
  yAxisLabel: PropTypes.string,
  size: PropTypes.object,
};

AreaChart.defaultProps = {
  data: null,
  onclick: noop,
  noDataMsg: __('No data available'),
  config: 'timeseries',
  xAxisDataLabel: 'time',
  yAxisLabel: null,
  size: undefined,
};

export default AreaChart;
