import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import store from '../redux';
import componentRegistry from '../components/componentRegistry';

export { default as registerReducer } from '../redux/reducers/registerReducer';

// eslint-disable-next-line react/prop-types
const AwaitedMount = ({ component, data, flattenData }) => {
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
    if (Object.values(window.allPluginsLoaded).every(Boolean))
      setAllPluginsImported(true);
  };
  useEffect(() => {
    document.addEventListener('loadPlugin', updateAllPluginsImported);
    return () =>
      window.removeEventListener('loadPlugin', updateAllPluginsImported);
  }, []);
  useEffect(() => {
    if (!mounted) mountComponent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allPluginsImported]);
  return mounted ? mountedComponent : <div>Loading...</div>;
};

function mountNode(component, reactNode, data, flattenData) {
  ReactDOM.render(
    <AwaitedMount
      component={component}
      data={data}
      flattenData={flattenData}
    />,
    reactNode
  );
}

/**
 * This is a html tag (Web component) that can be used for mounting react component from ComponentRegistry.
 */
class ReactComponentElement extends HTMLElement {
  static get observedAttributes() {
    return ['data-props'];
  }

  get componentName() {
    return this.getAttribute('name');
  }
  get reactProps() {
    return this.dataset.props !== '' ? JSON.parse(this.dataset.props) : {};
  }
  set reactProps(newProps) {
    this.dataset.props = JSON.stringify(newProps);
  }
  get mountPoint() {
    if (!this._mountPoint) {
      this._mountPoint = this;
    }

    return this._mountPoint;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'data-props':
        // if this is not the initial prop set
        if (oldValue !== null) this._render();
        break;
      default:
      // We don't know how to react to default attribute change
    }
  }

  connectedCallback() {
    this._render();
  }

  _render() {
    try {
      mountNode(this.componentName, this, this.reactProps, true);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(
        `Unable to mount foreman-react-component: ${this.componentName}`,
        error
      );
    }
  }
}

if (!window.customElements.get('foreman-react-component')) {
  window.customElements.define(
    'foreman-react-component',
    ReactComponentElement
  );
}
