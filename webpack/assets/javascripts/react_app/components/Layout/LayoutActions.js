import {
  LAYOUT_INITIALIZE,
  LAYOUT_SHOW_LOADING,
  LAYOUT_HIDE_LOADING,
  LAYOUT_CHANGE_LOCATION,
  LAYOUT_CHANGE_ACTIVE,
  LAYOUT_CHANGE_ORG,
  LAYOUT_CHANGE_IS_NAV_OPEN,
} from './LayoutConstants';

export const initializeLayout = ({
  items,
  activeMenu,
  organization,
  location,
}) => ({
  type: LAYOUT_INITIALIZE,
  payload: {
    items,
    activeMenu,
    organization,
    location,
  },
});

export const showLoading = () => ({
  type: LAYOUT_SHOW_LOADING,
});

export const hideLoading = () => ({
  type: LAYOUT_HIDE_LOADING,
});

export const changeActiveMenu = ({ title }) => ({
  type: LAYOUT_CHANGE_ACTIVE,
  payload: {
    activeMenu: title,
  },
});

export const changeOrganization = organization => ({
  type: LAYOUT_CHANGE_ORG,
  payload: { organization },
});

export const changeLocation = location => ({
  type: LAYOUT_CHANGE_LOCATION,
  payload: {
    location,
  },
});

export const changeIsNavOpen = isNavOpen => ({
  type: LAYOUT_CHANGE_IS_NAV_OPEN,
  payload: {
    isNavOpen,
  },
});
