import { testActionSnapshotWithFixtures } from '../../../common/testHelpers';
import {
  initializeLayout,
  showLoading,
  hideLoading,
  changeActiveMenu,
  changeOrganization,
  changeLocation,
  changeIsNavOpen,
} from '../LayoutActions';

const fixtures = {
  'should initialize the layout': () =>
    initializeLayout({
      items: 'some items',
      activeMenu: 'some active menu',
      organization: 'org1',
      location: 'loc2',
    }),

  'should showLoading': () => showLoading(),

  'should hideLoading': () => hideLoading(),

  'should changeActiveMenu to Monitor': () =>
    changeActiveMenu({ title: 'Monitor' }),

  'should changeIsNavOpen': () => changeIsNavOpen(false),

  'should changeOrganization': () => changeOrganization('org1'),

  'should changeLocation': () => changeLocation('loc1'),
};

describe('Layout actions', () => testActionSnapshotWithFixtures(fixtures));
