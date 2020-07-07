import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import {
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
} from '@patternfly/react-core';
import { UserAltIcon } from '@patternfly/react-icons';
import { translate as __ } from '../../../../common/I18n';

const UserDropdowns = ({
  user,
  changeActiveMenu,
  notificationUrl,
  stopImpersonationUrl,
  ...props
}) => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const onDropdownToggle = newUserDropdownOpen => {
    setUserDropdownOpen(newUserDropdownOpen);
  };
  const onDropdownSelect = () => {
    setUserDropdownOpen(userDropdownOpen);
  };
  const userInfo = get(user, 'current_user.user');

  const userDropdownItems = user.user_dropdown[0].children.map((item, i) =>
    item.type === 'divider' ? (
      <DropdownSeparator key={i} />
    ) : (
      <DropdownItem
        key={i}
        className="user_menuitem"
        href={item.url}
        onClick={() => {
          changeActiveMenu({ title: 'User' });
        }}
        {...item.html_options}
      >
        {__(item.name)}
      </DropdownItem>
    )
  );

  return (
    <React.Fragment>
      {userInfo && (
        <Dropdown
          isPlain
          position="right"
          onSelect={onDropdownSelect}
          isOpen={userDropdownOpen}
          toggle={
            <DropdownToggle onToggle={onDropdownToggle}>
              <UserAltIcon className="user-icon" />
              {userInfo.name}
            </DropdownToggle>
          }
          dropdownItems={userDropdownItems}
          {...props}
        />
      )}
    </React.Fragment>
  );
};

UserDropdowns.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** User Data Array */
  user: PropTypes.object,
  /** notification URL */
  notificationUrl: PropTypes.string,
  /** changeActiveMenu Func */
  changeActiveMenu: PropTypes.func,
  stopImpersonationUrl: PropTypes.string,
};
UserDropdowns.defaultProps = {
  className: '',
  user: {},
  notificationUrl: '',
  changeActiveMenu: null,
  stopImpersonationUrl: '',
};
export default UserDropdowns;
