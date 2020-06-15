import React, { useEffect } from 'react';
import { Spinner } from 'patternfly-react';
import { TableVariant } from '@patternfly/react-table';
import PropTypes from 'prop-types';
import Table from '../common/table/components/PF4Table';
import { STATUS } from '../../constants';
import MessageBox from '../common/MessageBox';
import { translate as __ } from '../../common/I18n';
import { getURIQuery } from '../../common/helpers';
import DeleteButton from '../common/table/components/DeleteButtonPF4';
import NameCell from '../common/table/components/NameCell';

const ModelsTable = ({ getTableItems, error, status, response }) => {
  const { results, ...metadata } = response;
  useEffect(() => {
    getTableItems(getURIQuery(window.location.href));
  }, [getTableItems]);

  if (!results) {
    return <Spinner size="lg" loading />;
  }

  if (status === STATUS.ERROR) {
    return (
      <MessageBox
        key="models-table-error"
        icontype="error-circle-o"
        msg={__(`Could not receive data: ${error && error.message}`)}
      />
    );
  }
  const columns = [
    __('Name'),
    __('Vendor Class'),
    __('Hardware Model'),
    __('Hosts'),
    __('Actions'),
  ];
  const formatRows = results
    ? results.map(result => ({
        cells: [
          {
            title: (
              <NameCell
                name={encodeURI(result.name)}
                active={result.can_edit}
                id={result.id}
                controller="models"
              >
                {result.name}
              </NameCell>
            ),
          },
          result.vendor_class,
          result.hardware_model,
          result.host_count,
          {
            title: (
              <DeleteButton
                active={result.can_delete}
                name={encodeURI(result.name)}
                id={result.id}
                controller="models"
              />
            ),
          },
        ],
      }))
    : [];

  return (
    <Table
      key="models-table"
      variant={TableVariant.compact}
      cells={columns}
      rows={[...formatRows]}
      status={status || 'PENDING'}
      emptyBody="empty body"
      emptyTitle="empty title"
      fetchItems={getTableItems}
      metadata={metadata}
    />
  );
};

ModelsTable.propTypes = {
  getTableItems: PropTypes.func.isRequired,
  status: PropTypes.oneOf(Object.keys(STATUS)),
  sortBy: PropTypes.string,
  sortOrder: PropTypes.string,
  error: PropTypes.object,
  response: PropTypes.shape({
    results: PropTypes.array,
  }),
};

ModelsTable.defaultProps = {
  status: STATUS.PENDING,
  sortBy: '',
  sortOrder: '',
  error: null,
  response: { results: [] },
};

export default ModelsTable;
