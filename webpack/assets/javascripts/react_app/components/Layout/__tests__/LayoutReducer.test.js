import {
  LAYOUT_INITIALIZE,
  LAYOUT_SHOW_LOADING,
  LAYOUT_HIDE_LOADING,
  LAYOUT_CHANGE_ORG,
  LAYOUT_CHANGE_LOCATION,
  LAYOUT_CHANGE_ACTIVE,
  LAYOUT_CHANGE_IS_NAV_OPEN,
} from '../LayoutConstants';

import reducer from '../LayoutReducer';

import { testReducerSnapshotWithFixtures } from '../../../common/testHelpers';

const fixtures = {
  'should return the initial state': {},
  'should handle LAYOUT_INITIALIZE': {
    action: {
      type: LAYOUT_INITIALIZE,
      payload: {
        items: 'some-items',
        activeMenu: 'some-menu',
        organization: 'some organization',
        location: 'some location',
      },
    },
  },
  'should handle LAYOUT_SHOW_LOADING': {
    action: {
      type: LAYOUT_SHOW_LOADING,
    },
  },
  'should handle LAYOUT_HIDE_LOADING': {
    action: {
      type: LAYOUT_HIDE_LOADING,
    },
  },
  'should handle LAYOUT_CHANGE_ACTIVE': {
    action: {
      type: LAYOUT_CHANGE_ACTIVE,
      payload: {
        activeMenu: 'Monitor',
      },
    },
  },
  'should handle LAYOUT_CHANGE_IS_NAV_OPEN': {
    action: {
      type: LAYOUT_CHANGE_IS_NAV_OPEN,
      payload: { isNavOpen: false },
    },
  },
  'should handle LAYOUT_CHANGE_ORG': {
    action: {
      type: LAYOUT_CHANGE_ORG,
      payload: {
        organization: 'org1',
      },
    },
  },
  'should handle LAYOUT_CHANGE_LOCATION': {
    action: {
      type: LAYOUT_CHANGE_LOCATION,
      payload: {
        location: 'yaml',
      },
    },
  },
};

describe('Layout reducer', () =>
  testReducerSnapshotWithFixtures(reducer, fixtures));
