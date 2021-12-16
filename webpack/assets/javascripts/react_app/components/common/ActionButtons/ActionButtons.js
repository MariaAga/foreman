import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { SplitButton, MenuItem, Button } from 'patternfly-react';

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownToggleAction,
} from '@patternfly/react-core';
import { CaretDownIcon } from '@patternfly/react-icons';
/**
 * Generate a button or a dropdown of buttons
 * @param  {String} title The title of the button for the title and text inside the button
 * @param  {Object} action action to preform when the button is click can be href with data-method or Onclick
 * @return {Function} button component or splitbutton component
 */
export const ActionButtons = ({ buttons }) => {
  const [isOpen, setIsOpen] = useState(false);
  if (!buttons.length) return null;
  if (buttons.length === 1)
    return <Button {...buttons[0].action}>{buttons[0].title}</Button>;
  const firstButton = buttons.shift();
  return (
    <Dropdown
      toggle={
        <DropdownToggle
          splitButtonItems={[
            <DropdownToggleAction
              key={firstButton.title}
              {...firstButton.action}
            >
              title={firstButton.title}
            </DropdownToggleAction>,
          ]}
          onToggle={newIsOpen => setIsOpen(newIsOpen)}
          toggleIndicator={CaretDownIcon}
          title={firstButton.title}
        />
      }
      isOpen={isOpen}
      dropdownItems={buttons.map(button => (
        <DropdownItem
          key={button.title}
          component="button"
          title={button.title}
          {...button.action}
        >
          {button.title}
        </DropdownItem>
      ))}
    />
  );
};
ActionButtons.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      action: PropTypes.object,
      title: PropTypes.string,
    })
  ),
};

ActionButtons.defaultProps = {
  buttons: [],
};
