import React from 'react';
import PropTypes from 'prop-types';
import { Title, TitleSizes } from '@patternfly/react-core';
import { useModalContext } from '../ForemanModalHooks';

const ForemanModalHeader = props => {
  const { title } = useModalContext();
  // title will be falsey if its value is the default ''
  // Render the provided children, or default markup if none given
  return (
    <div {...props}>
      {title && (
        <Title headingLevel="h4" size={TitleSizes.md}>
          {title}
        </Title>
      )}
      {props.children}
    </div>
  );
};

ForemanModalHeader.propTypes = {
  children: PropTypes.node,
};

ForemanModalHeader.defaultProps = {
  children: null,
};

export default ForemanModalHeader;
