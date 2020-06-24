import React from 'react';
import {
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
} from '@patternfly/react-core';
import TaxonomySwitcher from '../TaxonomySwitcher/TaxonomySwitcher';
import UserDropdowns from './UserDropdowns';
import NotificationContainer from '../../../notifications';
import ImpersonateIcon from '../ImpersonateIcon';
import { layoutPropTypes, layoutDefaultProps } from '../../LayoutHelper';
import './HeaderToolbar.scss';

const HeaderToolbar = ({
  data,
  currentLocation,
  changeLocation,
  currentOrganization,
  changeOrganization,
  isLoading,
  changeActiveMenu,
  ...props
}) => (
  <Toolbar id="data-toolbar" {...props}>
    <ToolbarContent>
      <ToolbarGroup
        className="test-name"
        spaceItems={{ default: 'sm' }}
        visibility={{ default: 'hidden', lg: 'visible' }}
      >
        <TaxonomySwitcher
          taxonomiesBool={data.taxonomies}
          currentLocation={currentLocation}
          locations={
            data.taxonomies.locations ? data.locations.available_locations : []
          }
          onLocationClick={changeLocation}
          currentOrganization={currentOrganization}
          organizations={
            data.taxonomies.organizations
              ? data.orgs.available_organizations
              : []
          }
          onOrgClick={changeOrganization}
          isLoading={isLoading}
        />
      </ToolbarGroup>
      <ToolbarGroup
        alignment={{ default: 'alignRight' }}
        spaceItems={{ default: 'sm' }}
        visibility={{ default: 'hidden', lg: 'visible' }}
      >
        <ToolbarItem>
          <NotificationContainer data={{ url: data.notification_url }} />
        </ToolbarItem>
        {data.user.impersonated_by && (
          <ToolbarItem>
            <ImpersonateIcon
              stopImpersonationUrl={data.stop_impersonation_url}
            />
          </ToolbarItem>
        )}
        <ToolbarItem>
          <UserDropdowns
            notificationUrl={data.notification_url}
            user={data.user}
            changeActiveMenu={changeActiveMenu}
            stopImpersonationUrl={data.stop_impersonation_url}
          />
        </ToolbarItem>
      </ToolbarGroup>
    </ToolbarContent>
  </Toolbar>
);
HeaderToolbar.propTypes = {
  data: layoutPropTypes.data,
  currentLocation: layoutPropTypes.currentLocation,
  changeLocation: layoutPropTypes.changeLocation,
  currentOrganization: layoutPropTypes.currentOrganization,
  changeOrganization: layoutPropTypes.changeOrganization,
  isLoading: layoutPropTypes.isLoading,
  changeActiveMenu: layoutPropTypes.changeActiveMenu,
};
HeaderToolbar.defaultProps = {
  data: layoutDefaultProps.data,
  currentLocation: layoutDefaultProps.currentLocation,
  changeLocation: layoutDefaultProps.changeLocation,
  currentOrganization: layoutDefaultProps.currentOrganization,
  changeOrganization: layoutDefaultProps.changeOrganization,
  isLoading: layoutDefaultProps.isLoading,
  changeActiveMenu: layoutDefaultProps.changeActiveMenu,
};
export default HeaderToolbar;
