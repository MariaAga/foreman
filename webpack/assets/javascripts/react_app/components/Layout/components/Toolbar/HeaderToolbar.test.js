import { testComponentSnapshotsWithFixtures } from '../../../../common/testHelpers';
import { hasTaxonomiesMock } from '../../Layout.fixtures';

import HeaderToolbar from './HeaderToolbar';

const fixtures = {
  'render HeaderToolbar': {
    data: hasTaxonomiesMock.data,
    currentLocation: hasTaxonomiesMock.currentLocation,
    changeLocation: () => {},
    currentOrganization: hasTaxonomiesMock.currentOrganization,
    changeOrganization: () => {},
    isLoading: false,
    changeActiveMenu: () => {},
  },
};

describe('HeaderToolbar', () => {
  describe('rendering', () =>
    testComponentSnapshotsWithFixtures(HeaderToolbar, fixtures));
});
