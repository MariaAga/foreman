import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import store from '../redux';
import componentRegistry from '../components/componentRegistry';

// Mounts a component after all plugins have been imported to make sure that all plugins are available to the component
export const AwaitedMount = ({ component, data, flattenData }) => {
  const [mounted, setMounted] = useState(false);
  const [mountedComponent, setMountedComponent] = useState(null);
  useEffect(() => {
    const tryMountComponent = () => {
      if (componentRegistry.registry[component]) {
        setMounted(true);
        setMountedComponent(
          componentRegistry.markup(component, {
            data,
            store,
            flattenData,
          })
        );
      } else if (
        window.allPluginsLoaded === undefined ||
        Object.values(window.allPluginsLoaded).every(Boolean)
      ) {
        console.error(`Component ${component} not found in registry`);
      }
    };
    document.addEventListener('loadPlugin', tryMountComponent);
    return () => document.removeEventListener('loadPlugin', tryMountComponent);
  }, [component, data, flattenData]);
  return mounted ? mountedComponent : null;
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
