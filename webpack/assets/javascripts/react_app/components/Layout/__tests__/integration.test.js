import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { IntegrationTestHelper } from '@theforeman/test';

import { hasTaxonomiesMock } from '../Layout.fixtures';
import Layout, { reducers } from '../index';

jest.mock('../../notifications', () => 'span');

describe('Layout integration test', () => {
  it('should flow', async () => {
    const integrationTestHelper = new IntegrationTestHelper(reducers);

    const component = integrationTestHelper.mount(
      <Router>
        <Layout {...hasTaxonomiesMock} />
      </Router>
    );
    await IntegrationTestHelper.flushAllPromises();
    component.update();

    integrationTestHelper.takeStoreSnapshot('initial state');
    const hostsMenuItem = component.find('.secondary-nav-item-pf > a');
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

    await IntegrationTestHelper.flushAllPromises();
    component.update();

    hostsMenuItem.at(1).simulate('click');
    integrationTestHelper.takeStoreAndLastActionSnapshot(
      'Changed ActiveMenu to Hosts'
    );
    expect(component.find('.secondary-nav-item-pf .active > a').text()).toBe(
      'Hosts'
    );
  });
});
