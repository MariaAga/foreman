import React from 'react';

import { translate as __ } from '../../../common/I18n';
import TableIndexPage from '../../../components/PF4/TableIndexPage/TableIndexPage';
import { MODELS_API_PATH, API_REQUEST_KEY } from '../constants';

const ModelsPage = () => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [isAllSelected, setIsAllSelected] = React.useState(false);
  const selectOptions = {
    onSelectAll: (_e, isSelecting) => {
      setIsAllSelected(isSelecting);
    },
    isAllSelected,
    onSelect: (rowIndex, isSelecting) => {
      setSelectedRows(_selectedRows => {
        if (isSelecting) {
          return [..._selectedRows, rowIndex];
        }
        return _selectedRows.filter(i => i !== rowIndex);
      });
    },
    isSelected: rowIndex => isAllSelected || selectedRows.includes(rowIndex),
  };
  const columns = {
    name: {
      title: __('Name'),
      wrapper: ({ can_edit: canEdit, id, name }) =>
        canEdit ? (
          <a href={`/models/${id}/edit`}>{name}</a>
        ) : (
          <span>{name}</span>
        ),
      isSorted: true,
    },
    vendor_class: {
      title: __('Vendor class'),
    },
    hardware_model: {
      title: __('Hardware model'),
    },
    hosts_count: {
      title: __('Hosts'),
    },
  };
  return (
    <TableIndexPage
      apiUrl={MODELS_API_PATH}
      apiOptions={{ key: API_REQUEST_KEY }}
      header={__('Hardware models')}
      controller="models"
      isDeleteable
      columns={columns}
      selectOptions={selectOptions}
    />
  );
};

export default ModelsPage;
