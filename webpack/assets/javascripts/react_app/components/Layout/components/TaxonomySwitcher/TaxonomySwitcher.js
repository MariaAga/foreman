import React from 'react';
import PropTypes from 'prop-types';
import { ToolbarItem, Spinner } from '@patternfly/react-core';
import { noop } from '../../../../common/helpers';

import {
  ANY_ORGANIZATION_TEXT,
  ANY_LOCATION_TEXT,
} from '../../LayoutConstants';
import TaxonomyDropdown from './TaxonomyDropdown';

const TaxonomySwitcher = ({
  currentOrganization,
  currentLocation,
  organizations,
  locations,
  taxonomiesBool,
  isLoading,
  onLocationClick,
  onOrgClick,
}) => (
  <React.Fragment>
    {taxonomiesBool.organizations && (
      <ToolbarItem>
        <TaxonomyDropdown
          taxonomyType="Organization"
          id="organization-dropdown"
          currentTaxonomy={currentOrganization}
          taxonomies={organizations}
          changeTaxonomy={onOrgClick}
          anyTaxonomyText={ANY_ORGANIZATION_TEXT}
          manageTaxonomyText="Manage Organizations"
          anyTaxonomyURL="/organizations/clear"
          manageTaxonomyURL="/organizations"
        />
      </ToolbarItem>
    )}
    {taxonomiesBool.locations && (
      <ToolbarItem>
        <TaxonomyDropdown
          taxonomyType="Location"
          id="location-dropdown"
          currentTaxonomy={currentLocation}
          taxonomies={locations}
          changeTaxonomy={onLocationClick}
          anyTaxonomyText={ANY_LOCATION_TEXT}
          manageTaxonomyText="Manage Locations"
          anyTaxonomyURL="/locations/clear"
          manageTaxonomyURL="/locations"
        />
      </ToolbarItem>
    )}
    {isLoading && <Spinner size="md" />}
  </React.Fragment>
);

TaxonomySwitcher.propTypes = {
  onLocationClick: PropTypes.func,
  onOrgClick: PropTypes.func,
  isLoading: PropTypes.bool,
  currentOrganization: PropTypes.string,
  currentLocation: PropTypes.string,
  organizations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
  taxonomiesBool: PropTypes.shape({
    locations: PropTypes.bool.isRequired,
    organizations: PropTypes.bool.isRequired,
  }).isRequired,
};

TaxonomySwitcher.defaultProps = {
  isLoading: false,
  currentLocation: ANY_LOCATION_TEXT,
  currentOrganization: ANY_ORGANIZATION_TEXT,
  onLocationClick: noop,
  onOrgClick: noop,
};

export default TaxonomySwitcher;
