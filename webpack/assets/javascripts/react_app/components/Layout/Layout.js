import React from 'react';

import { VerticalNav } from 'patternfly-react';
import {
  Page,
  PageSidebar,
  PageSection,
  PageSectionVariants,
} from '@patternfly/react-core';
import { translate as __ } from '../../common/I18n';
import {
  handleMenuClick,
  layoutPropTypes,
  layoutDefaultProps,
} from './LayoutHelper';
import LayoutContainer from './components/LayoutContainer';
import Header from './components/Toolbar/Header';
import Navigation from './Navigation';
import './layout.scss';

const Layout = ({
  items,
  data,
  isLoading,
  isCollapsed,
  navigate,
  expandLayoutMenus,
  collapseLayoutMenus,
  children,
  flyoutActiveItem,
  setFlyoutActiveItem,
}) => {
  const onNavToggle = () => {
    isCollapsed ? expandLayoutMenus() : collapseLayoutMenus();
  };
  return (
    <>
      <Page
        header={
          <Header data={data} onNavToggle={onNavToggle} isLoading={isLoading} />
        }
        sidebar={
          <PageSidebar
            isNavOpen={!isCollapsed}
            nav={
              <Navigation
                items={items}
                navigate={navigate}
                flyoutActiveItem={flyoutActiveItem}
                setFlyoutActiveItem={setFlyoutActiveItem}
              />
            }
          />
        }
      >
        <LayoutContainer isCollapsed={isCollapsed}>{children}</LayoutContainer>
      </Page>
    </>
  );
};

Layout.propTypes = layoutPropTypes;
Layout.defaultProps = layoutDefaultProps;

export default Layout;
