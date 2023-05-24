import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'patternfly-react';
import classNames from 'classnames';
import ChartBox from '../ChartBox/ChartBox';
import { translate as __ } from '../../common/I18n';
import { STATUS } from '../../constants';

import './ConfigReports.scss';

const ConfigReports = props => {
  const {
    metricsChartData,
    statusChartData,
    metricsData: { tableData, tableClasses, total },
  } = props.data;

  const createRow = ([name, value], i) => (
    <tr key={i}>
      <td className="break-me">{name}</td>
      <td>{value}</td>
    </tr>
  );

  const chartBoxProps = {
    noDataMsg: __('No data available'),
    status: STATUS.RESOLVED,
    config: 'medium',
  };

  return (
    <Row>
      <Col md={6} lg={4}>
        <ChartBox
          {...chartBoxProps}
          type="donut"
          chart={{ data: metricsChartData, id: 'report-metrics' }}
          title={__('Report Metrics')}
        />
      </Col>
      <Col md={4} lg={2}>
        <table className={classNames(tableClasses)}>
          <tbody>{tableData.map((metric, i) => createRow(metric, i))}</tbody>
          <tfoot>
            <tr>
              <th>{__('Total')}</th>
              <th>{total}</th>
            </tr>
          </tfoot>
        </table>
      </Col>
      <Col md={12} lg={8}>
        <ChartBox
          {...chartBoxProps}
          type="bar"
          chart={{ data: statusChartData, id: 'report-status' }}
          title={__('Report Status')}
        />
      </Col>
    </Row>
  );
};

ConfigReports.propTypes = {
  data: PropTypes.shape({
    metricsChartData: PropTypes.array,
    statusChartData: PropTypes.array,
    metricsData: PropTypes.shape({
      tableData: PropTypes.array,
      total: PropTypes.number,
      tableClasses: PropTypes.string,
    }),
  }).isRequired,
};

export default ConfigReports;
