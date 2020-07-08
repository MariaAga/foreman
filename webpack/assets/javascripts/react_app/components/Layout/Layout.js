import React from 'react';
import {
  Brand,
  Page,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  SkipToContent,
  PageHeader,
} from '@patternfly/react-core';

import VerticalNav from './components/VerticalNav';
import HeaderToolbar from './components/Toolbar/HeaderToolbar';

import { layoutPropTypes, layoutDefaultProps } from './LayoutHelper';
import './layout.scss';

const Layout = ({
  items,
  data,
  isLoading,
  isNavOpen,
  navigate,
  changeActiveMenu,
  changeOrganization,
  changeLocation,
  currentOrganization,
  currentLocation,
  activeMenu,
  children,
  changeIsNavOpen,
}) => {
  const onNavToggle = () => {
    isNavOpen ? changeIsNavOpen(false) : changeIsNavOpen(true);
  };
  const header = (
    <PageHeader
      logo={
        <React.Fragment>
          <Brand src={data.logo} alt={data.brand} />
          <span className="navbar-brand-txt">
            <span>{data.brand}</span>
          </span>
        </React.Fragment>
      }
      logoProps={{ href: data.root }}
      showNavToggle
      isManagedSidebar
      onNavToggle={onNavToggle}
      headerTools={
        <HeaderToolbar
          data={data}
          currentLocation={currentLocation}
          changeLocation={changeLocation}
          currentOrganization={currentOrganization}
          changeOrganization={changeOrganization}
          isLoading={isLoading}
          changeActiveMenu={changeActiveMenu}
        />
      }
      className="navbar-pf-vertical"
    />
  );

  const sidebar = (
    <PageSidebar
      isNavOpen={isNavOpen}
      nav={
        <VerticalNav
          items={items}
          activeMenu={activeMenu}
          changeActiveMenu={changeActiveMenu}
          navigate={navigate}
        />
      }
    />
  );
  const pageId = 'main';
  const pageSkipToContent = (
    <SkipToContent href={`#${pageId}`}>Skip to content</SkipToContent>
  );
  return (
    <Page
      header={header}
      sidebar={sidebar}
      skipToContent={pageSkipToContent}
      mainContainerId={pageId}
      className="foreman-theme"
    >
      <PageSection variant={PageSectionVariants.light}>{children}</PageSection>
    </Page>
  );
};
Layout.propTypes = layoutPropTypes;

Layout.defaultProps = layoutDefaultProps;

export default Layout;
