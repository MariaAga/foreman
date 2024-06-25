import React from 'react';
import { IntlProvider } from 'react-intl';
import { intl } from './I18n';
import { getDisplayName } from './helpers';

const i18nProviderWrapperFactory = () => WrappedComponent => {
  const wrappedName = getDisplayName(WrappedComponent);
  const I18nProviderWrapper = (props) => {
    const [htmlElemnt] = document.getElementsByTagName('html');
    const langAttr = htmlElemnt.getAttribute('lang') || intl.locale;
    const timezone = htmlElemnt.getAttribute('data-timezone') || intl.timezone;
    return (
      <IntlProvider
        locale={langAttr}
        timeZone={timezone}
      >
          <WrappedComponent {...props} />
      </IntlProvider>
    );
  };

  I18nProviderWrapper.displayName = `I18nProviderWrapper(${wrappedName})`;

  return I18nProviderWrapper;
};

export { i18nProviderWrapperFactory };
