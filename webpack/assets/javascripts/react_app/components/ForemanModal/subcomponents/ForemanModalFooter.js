import React from 'react';
import PropTypes from 'prop-types';
import { ModalBoxFooter, Button } from '@patternfly/react-core';
import { useModalContext } from '../ForemanModalHooks';
import { translate as __ } from '../../../common/I18n';

import SubmitOrCancel from './SubmitOrCancel';

const ForemanModalFooter = props => {
  const childCount = React.Children.count(props.children);
  const { onClose, isSubmitting, id, submitProps } = useModalContext();

  // Render the provided children, or default markup if none given
  const closeButton = childCount === 0 && (
    <Button onClick={onClose}>{__('Close')}</Button>
  );

  const submitOrCancel = childCount === 0 && submitProps && (
    <SubmitOrCancel
      isSubmitting={isSubmitting}
      onCancel={onClose}
      submitProps={submitProps}
      id={id}
    />
  );

  return (
    <ModalBoxFooter {...props}>
      {props.children}
      {submitOrCancel || closeButton}
    </ModalBoxFooter>
  );
};

ForemanModalFooter.propTypes = {
  children: PropTypes.node,
};

ForemanModalFooter.defaultProps = {
  children: null,
};

export default ForemanModalFooter;
