import { testComponentSnapshotsWithFixtures } from '../../../../common/testHelpers';
import TaxonomyDropdown from './TaxonomyDropdown';
import { hasTaxonomiesMock } from '../../Layout.fixtures';

const props = {
  taxonomyType: 'Organization',
  id: 'organization-dropdown',
  currentTaxonomy: hasTaxonomiesMock.currentOrganization,
  taxonomies: hasTaxonomiesMock.data.orgs.available_organizations,
  anyTaxonomyText: 'Any Organization',
  manageTaxonomyText: 'Manage Organizations',
  anyTaxonomyURL: '/organizations/clear',
  manageTaxonomyURL: '/organizations',
  isOpen: true,
};

const fixtures = {
  rendering: { ...props },
};

describe('TaxonomyDropdown', () =>
  testComponentSnapshotsWithFixtures(TaxonomyDropdown, fixtures));
