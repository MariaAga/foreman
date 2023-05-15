import React from 'react';
import { Button } from '@patternfly/react-core';
import PropTypes from 'prop-types';

import { translate as __ } from '../../../../common/I18n';

const CancelBtn = ({ onCancel, disabled, bsStyle, btnText }) => (
  <Button variant={bsStyle} onClick={onCancel} disabled={disabled}>
    {btnText}
  </Button>
);

CancelBtn.propTypes = {
  onCancel: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  bsStyle: PropTypes.string,
  btnText: PropTypes.string,
};

CancelBtn.defaultProps = {
  disabled: false,
  bsStyle: 'secondary',
  btnText: __('Cancel'),
};

export default CancelBtn;
