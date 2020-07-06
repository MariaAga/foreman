import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { IntegrationTestHelper } from '@theforeman/test';

import { hasTaxonomiesMock } from '../Layout.fixtures';
import Layout, { reducers } from '../index';

jest.mock('../../notifications', () => 'span');

describe('Layout integration test', () => {
  it('should flow', async () => {
    const integrationTestHelper = new IntegrationTestHelper(reducers);
    const spy = jest.spyOn(console, 'error').mockImplementation();

    const component = integrationTestHelper.mount(
      <Router>
        <Layout {...hasTaxonomiesMock} />
      </Router>
    );
    await IntegrationTestHelper.flushAllPromises();
    component.update();

    // Currently expect a prop warning since VerticalNav passes an object into NavExpandable title prop although it expects a string. This will change soon.
    expect(spy).toHaveBeenCalledTimes(1);
    // eslint-disable-next-line
    expect(console.error.mock.calls[0][0]).toEqual(expect.stringContaining('Warning: Failed prop type: Invalid prop `title` of type `object` supplied to `NavExpandable`, expected `string`'));
    spy.mockRestore();

    integrationTestHelper.takeStoreSnapshot('initial state');
    const locationToggle = component.find(
      '#location-dropdown .pf-c-context-selector__toggle'
    );
    const organizationToggle = component.find(
      '#organization-dropdown .pf-c-context-selector__toggle'
    );
    locationToggle.simulate('click');
    component.update();
    const yamlLocation = component.find('#select_taxonomy_yaml');
    yamlLocation.at(0).simulate('click');
    integrationTestHelper.takeStoreAndLastActionSnapshot(
      'Location "yaml" clicked'
    );
    expect(
      component
        .find('#location-dropdown .pf-c-context-selector__toggle-text')
        .text()
    ).toBe('yaml');

    organizationToggle.simulate('click');
    component.update();
    const org2Organization = component.find('#select_taxonomy_org2');
    org2Organization.at(0).simulate('click');
    integrationTestHelper.takeStoreAndLastActionSnapshot('Org "org2" clicked');
    expect(
      component
        .find('#organization-dropdown .pf-c-context-selector__toggle-text')
        .text()
    ).toBe('org2');

    const hostsMenuItem = component.find('li.foreman-nav-expandable').at(1);

    hostsMenuItem.prop('onClick')({
      target: {
        getAttribute: attr => 'pf-nav-expandable',
      },
    });

    await IntegrationTestHelper.flushAllPromises();
    hostsMenuItem.update();
    component.update();

    integrationTestHelper.takeStoreAndLastActionSnapshot(
      'Changed ActiveMenu to Hosts'
    );
    expect(
      component
        .find('.pf-c-nav__item.pf-m-expanded > a')
        .at(1)
        .text()
    ).toBe('Hosts');
  });
});
