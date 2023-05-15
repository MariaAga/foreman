import React from 'react';
import { Modal } from '@patternfly/react-core';
import PropTypes from 'prop-types';
import ModalContext from './ForemanModalContext';
import ForemanModalHeader from './subcomponents/ForemanModalHeader';
import ForemanModalFooter from './subcomponents/ForemanModalFooter';
import { extractModalNodes } from './helpers';

const ForemanModal = props => {
  const {
    id,
    title,
    onClose,
    isOpen,
    children,
    isSubmitting,
    submitProps,
    ...propsToPassDown
  } = props;

  // Extract header and footer from children, if provided
  const { headerChild, footerChild, otherChildren } = extractModalNodes(
    children
  );
  const context = {
    isOpen,
    onClose,
    isSubmitting,
    id,
    title,
    submitProps,
  };

  const defaultHeader = headerTitle =>
    headerTitle ? <ForemanModalHeader /> : null;
  const headerToRender = headerChild || defaultHeader(title);

  const defaultFooter = subProps =>
    Object.keys(subProps).length !== 0 ? <ForemanModalFooter /> : null;
  const footerToRender = footerChild || defaultFooter(submitProps);

  return (
    <ModalContext.Provider value={context}>
      <Modal
        className="foreman-modal"
        header={headerToRender}
        footer={footerToRender}
        variant="medium"
        {...propsToPassDown}
        isOpen={isOpen}
        onClose={onClose}
      >
        {otherChildren}
      </Modal>
    </ModalContext.Provider>
  );
};

ForemanModal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  id: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool,
  submitProps: PropTypes.object,
};

ForemanModal.defaultProps = {
  children: null,
  isOpen: false,
  title: '',
  isSubmitting: false,
  submitProps: {},
};

export default ForemanModal;
