import React from 'react';
import PropTypes from 'prop-types';
import { importRemote } from '@module-federation/utilities';
import { LoginPage as PFLoginPage } from 'patternfly-react';
import { translate as __ } from '../../common/I18n';
import { adjustAlerts, defaultFormProps } from './helpers';
import './LoginPage.scss';
import ErrorBoundary from '../common/ErrorBoundary';

const LoginPage = ({
  alerts,
  backgroundUrl,
  caption,
  logoSrc,
  token,
  version,
}) => {
  const Bar = () => <span>temp</span>;
  // const Dot = () => <span>temp</span>;
  // const Bar = React.lazy(() =>
  //   importRemote({
  //     url: 'http://localhost:3002',
  //     scope: 'app2',
  //     module: 'Button',
  //     remoteEntryFileName: 'app2-remoteEntry.js',
  //   })
  // );
  const Dot = React.lazy(() =>
    importRemote({
      url: 'http://localhost:8080',
      scope: 'shell',
      module: 'App',
      remoteEntryFileName: 'shellEntry.js',
    })
  );
  window.barTest = Bar;
  const { modifiedAlerts, submitErrors } = adjustAlerts(alerts);
  const footerLinks = caption
    ? [{ children: caption, href: 'foreman-login-footer-text' }] // The href text is detected in our css to disable it from being an actual link.
    : [];

  require('react-dom');
  window.React2 = require('react');

window.react2Path = require.resolve('react');
console.log(window.React1 === window.React2);
  return (
    <div id="login-page">
      <ErrorBoundary>
        <React.Suspense fallback={<span>Loading Button</span>}>
          <Bar />
        </React.Suspense>
        <React.Suspense fallback={<span>Loading App</span>}>
          <Dot />
        </React.Suspense>
      </ErrorBoundary>
      <PFLoginPage
        container={{
          backgroundUrl,
          alert: modifiedAlerts,
        }}
        header={{
          logoSrc,
          caption: <h1 id="title">{__('Welcome')}</h1>,
        }}
        card={{
          title: __('Log in to your account'),
          form: {
            ...defaultFormProps,
            submitError: submitErrors,
            additionalFields: (
              <input name="authenticity_token" type="hidden" value={token} />
            ),
          },
        }}
        footerLinks={footerLinks}
      />
    </div>
  );
};

LoginPage.propTypes = {
  alerts: PropTypes.shape({
    success: PropTypes.string,
    warning: PropTypes.string,
    error: PropTypes.string,
  }),
  backgroundUrl: PropTypes.string,
  caption: PropTypes.string,
  logoSrc: PropTypes.string,
  token: PropTypes.string.isRequired,
  version: PropTypes.string,
};

LoginPage.defaultProps = {
  alerts: null,
  backgroundUrl: null,
  caption: null,
  logoSrc: null,
  version: null,
};

export default LoginPage;
