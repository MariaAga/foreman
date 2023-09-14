import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import store from '../redux';
import componentRegistry from '../components/componentRegistry';
import { translate as __ } from './I18n';

export const AwaitedMount = ({ component, data, flattenData }) => {
  const [mounted, setMounted] = useState(false);
  const [mountedComponent, setMountedComponent] = useState(null);
  const [allPluginsImported, setAllPluginsImported] = useState(false);
  async function mountComponent() {
    if (componentRegistry.registry[component]) {
      setMounted(true);
      setMountedComponent(
        componentRegistry.markup(component, {
          data,
          store,
          flattenData,
        })
      );
    } else if (allPluginsImported) {
      const awaitedComponent = componentRegistry.markup(component, {
        data,
        store,
        flattenData,
      });
      setMounted(true);
      setMountedComponent(awaitedComponent);
    }
  }
  const updateAllPluginsImported = e => {
    setAllPluginsImported(true);
  };
  useEffect(() => {
    document.addEventListener('loadJS', updateAllPluginsImported);
    return () => window.removeEventListener('loadJS', updateAllPluginsImported);
  }, []);
  useEffect(() => {
    if (!mounted) mountComponent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allPluginsImported]);
  return mounted ? mountedComponent : <div>{__('Loading...')}</div>;
};

AwaitedMount.propTypes = {
  component: PropTypes.string.isRequired,
  data: PropTypes.object,
  flattenData: PropTypes.bool,
};
AwaitedMount.defaultProps = {
  data: {},
  flattenData: false,
};
