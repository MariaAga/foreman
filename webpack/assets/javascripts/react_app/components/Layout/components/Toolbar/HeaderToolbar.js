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

const HeaderToolbar = ({
  data: {
    taxonomies,
    locations,
    orgs,
    notification_url: notificationUrl,
    user,
    stop_impersonation_url: stopImpersonationUrl,
  },
  currentLocation,
  changeLocation,
  currentOrganization,
  changeOrganization,
  isLoading,
  changeActiveMenu,
}) => (
  <Toolbar id="data-toolbar">
    <ToolbarContent>
      <ToolbarGroup
        spaceItems={{ default: 'sm' }}
        visibility={{ default: 'hidden', lg: 'visible' }}
      >
        <TaxonomySwitcher
          taxonomiesBool={taxonomies}
          currentLocation={currentLocation}
          locations={taxonomies.locations ? locations.available_locations : []}
          onLocationClick={changeLocation}
          currentOrganization={currentOrganization}
          organizations={
            taxonomies.organizations ? orgs.available_organizations : []
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
          <NotificationContainer data={{ url: notificationUrl }} />
        </ToolbarItem>
        {user.impersonated_by && (
          <ToolbarItem>
            <ImpersonateIcon stopImpersonationUrl={stopImpersonationUrl} />
          </ToolbarItem>
        )}
        <ToolbarItem>
          <UserDropdowns
            notificationUrl={notificationUrl}
            user={user}
            changeActiveMenu={changeActiveMenu}
            stopImpersonationUrl={stopImpersonationUrl}
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
