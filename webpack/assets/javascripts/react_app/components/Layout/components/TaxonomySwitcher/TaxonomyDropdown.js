import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ContextSelectorItem } from '@patternfly/react-core';
import CustomContextSelector from '../CustomContextSelector';
import { noop } from '../../../../common/helpers';
import { translate as __ } from '../../../../common/I18n';
import './TaxonomyDropdown.scss';

const TaxonomyDropdown = ({
  taxonomyType,
  currentTaxonomy,
  taxonomies,
  changeTaxonomy,
  anyTaxonomyText,
  manageTaxonomyText,
  anyTaxonomyURL,
  manageTaxonomyURL,
  ...props
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredItems, setFilteredItems] = useState(taxonomies);

  const onToggle = (event, newIsOpen) => {
    setIsOpen(newIsOpen);
  };
  const onSelect = () => {
    setIsOpen(!isOpen);
  };
  const onSearchInputChange = (value, event) => {
    setSearchValue(event.target.value);
    onSearchButtonClick();
  };
  const onSearchButtonClick = () => {
    const filtered =
      searchValue === ''
        ? taxonomies
        : taxonomies.filter(item =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          );
    setFilteredItems(filtered || []);
  };

  const staticGroup = {
    title: __(taxonomyType),
    items: [
      {
        title: __(anyTaxonomyText),
        href: anyTaxonomyURL,
        onClick: () => {
          changeTaxonomy({ title: anyTaxonomyText });
        },
        className: `${taxonomyType.toLowerCase()}s_clear`,
      },
      {
        title: __(manageTaxonomyText),
        href: manageTaxonomyURL,
        className: taxonomyType.toLowerCase(),
      },
    ],
  };
  return (
    <CustomContextSelector
      toggleText={__(currentTaxonomy)}
      onSearchInputChange={onSearchInputChange}
      isOpen={isOpen}
      searchInputValue={searchValue}
      onToggle={onToggle}
      onSelect={onSelect}
      onSearchButtonClick={onSearchButtonClick}
      screenReaderLabel="Selected Taxonomy:"
      showFilter={taxonomies.length > 6}
      searchProps={{
        className: 'taxonomy_search',
        id: `search_taxonomy_${taxonomyType.toLowerCase()}`,
      }}
      staticGroup={staticGroup}
      {...props}
    >
      {filteredItems.map((taxonomy, i) => (
        <ContextSelectorItem key={i}>
          <a
            id={`select_taxonomy_${taxonomy.title}`}
            className={`${taxonomyType.toLowerCase()}_menuitem`}
            href={taxonomy.href}
            onClick={() => {
              changeTaxonomy({ title: taxonomy.title, id: taxonomy.id });
            }}
          >
            {__(taxonomy.title)}
          </a>
        </ContextSelectorItem>
      ))}
    </CustomContextSelector>
  );
};

TaxonomyDropdown.propTypes = {
  taxonomyType: PropTypes.string.isRequired,
  currentTaxonomy: PropTypes.string.isRequired,
  taxonomies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
  id: PropTypes.string.isRequired,
  changeTaxonomy: PropTypes.func,
  anyTaxonomyText: PropTypes.string.isRequired,
  manageTaxonomyText: PropTypes.string.isRequired,
  anyTaxonomyURL: PropTypes.string.isRequired,
  manageTaxonomyURL: PropTypes.string.isRequired,
};

TaxonomyDropdown.defaultProps = {
  changeTaxonomy: noop,
};

export default TaxonomyDropdown;
