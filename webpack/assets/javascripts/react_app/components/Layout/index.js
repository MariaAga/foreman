import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { global_breakpoint_md as globalBreakpointMd } from '@patternfly/react-tokens/';

import {
  ANY_LOCATION_TAXONOMY,
  ANY_ORGANIZATION_TAXONOMY,
} from './LayoutConstants';
import {
  initializeLayout,
  changeActiveMenu,
  changeOrganization,
  changeLocation,
  collapseLayoutMenus,
  expandLayoutMenus,
  changeIsNavOpen,
} from './LayoutActions';
import reducer from './LayoutReducer';
import {
  patternflyMenuItemsSelector,
  selectActiveMenu,
  selectCurrentOrganization,
  selectCurrentLocation,
  selectIsLoading,
  selectIsNavOpen,
} from './LayoutSelectors';
import {
  createInitialTaxonomy,
  combineMenuItems,
  getActiveMenuItem,
} from './LayoutHelper';

import Layout from './Layout';

const ConnectedLayout = ({ children, data }) => {
  const dispatch = useDispatch();
  const isNavOpen = useSelector(state => selectIsNavOpen(state));
  useEffect(() => {
    dispatch(
      initializeLayout({
        items: combineMenuItems(data),
        activeMenu: getActiveMenuItem(data.menu).title,
        organization:
          (data.orgs &&
            createInitialTaxonomy(
              data.orgs.current_org,
              data.orgs.available_organizations
            )) ||
          ANY_ORGANIZATION_TAXONOMY,
        location:
          (data.locations &&
            createInitialTaxonomy(
              data.locations.current_location,
              data.locations.available_locations
            )) ||
          ANY_LOCATION_TAXONOMY,
      })
    );
  }, [data, dispatch]);

  useEffect(() => {
    const mobileView =
      window.innerWidth < Number.parseInt(globalBreakpointMd.value, 10);
    if (mobileView) {
      // ignore for mobile view
      return;
    }
    // toggles a class in the body tag, so that the main #rails-app-content container can have the appropriate width
    if (isNavOpen) {
      document.body.classList.add('pf-m-expanded');
    } else {
      document.body.classList.remove('pf-m-expanded');
    }
  }, [isNavOpen]);

  const { push: navigate } = useHistory();
  const items = useSelector(state => patternflyMenuItemsSelector(state));
  const isLoading = useSelector(state => selectIsLoading(state));
  const activeMenu = useSelector(state => selectActiveMenu(state));
  const currentOrganization = useSelector(state =>
    selectCurrentOrganization(state)
  );
  const currentLocation = useSelector(state => selectCurrentLocation(state));

  return (
    <Layout
      data={data}
      navigate={navigate}
      items={items}
      isLoading={isLoading}
      isNavOpen={isNavOpen}
      activeMenu={activeMenu}
      currentOrganization={currentOrganization}
      currentLocation={currentLocation}
      changeActiveMenu={menu => dispatch(changeActiveMenu(menu))}
      changeOrganization={org => dispatch(changeOrganization(org))}
      changeLocation={loc => dispatch(changeLocation(loc))}
      collapseLayoutMenus={() => dispatch(collapseLayoutMenus())}
      expandLayoutMenus={() => dispatch(expandLayoutMenus())}
      changeIsNavOpen={value => dispatch(changeIsNavOpen(value))}
    >
      {children}
    </Layout>
  );
};

// export prop-types
export const { propTypes, defaultProps } = Layout;

ConnectedLayout.propTypes = {
  children: propTypes.children,
  data: propTypes.data,
};

ConnectedLayout.defaultProps = {
  children: defaultProps.children,
  data: defaultProps.data,
};

// export reducers
export const reducers = { layout: reducer };

// export connected component
export default ConnectedLayout;
