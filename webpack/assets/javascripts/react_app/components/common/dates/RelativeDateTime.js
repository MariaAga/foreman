import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelativeTime , useIntl} from 'react-intl';
import {intlShape} from '@formatjs/intl';

import { selectUnit } from '@formatjs/intl-utils';
import { isoCompatibleDate } from '../../../common/helpers';
import {DEFAULT_THRESHOLDS } from '../../../constants';

function timeSince(date) {
  // Calculate the absolute difference in seconds to handle both past and future dates
  var seconds = Math.floor(Math.abs(date - new Date()) / 1000);
  var unit;

  // Calculate the value and unit based on the absolute difference
  var value = Math.floor(seconds / 31536000);
  if (value >= 1) {
    unit = 'year';
  } else {
    value = Math.floor(seconds / 2592000);
    if (value >= 1) {
      unit = 'month';
    } else {
      value = Math.floor(seconds / 86400);
      if (value >= 1) {
        unit = 'day';
      } else {
        value = Math.floor(seconds / 3600);
        if (value >= 1) {
          unit = "hour";
        } else {
          value = Math.floor(seconds / 60);
          if (value >= 1) {
            unit = "minute";
          } else {
            value = seconds;
            unit = "second";
          }
        }
      }
    }
  }
  // Return the calculated value and unit
  return {value, unit};
}

console.log(DEFAULT_THRESHOLDS)
const RelativeDateTime = ({ _date, defaultValue, children }) => {
// const date = new Date('2024-06-20T00:00:00Z');
const date = new Date('2024-04-30T00:00:00Z');
  if (date) {
    const isoDate = isoCompatibleDate(date);
    const intl = useIntl();

    const title = intl.formatDate(isoDate, {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
      year: 'numeric',
    });

    // Calculate the delta in seconds
    const now = new Date();
    const dateToCompare = new Date(isoDate);
    const deltaInSeconds = Math.round((dateToCompare - now) / 1000);

    // const {value, unit} = selectUnit(dateToCompare, now, DEFAULT_THRESHOLDS);
    const {value, unit} = timeSince(dateToCompare);
    /* eslint-disable react/style-prop-object */
    console.log(-value,value)
    return (
        <span title={title}>
        <FormattedRelativeTime
          value={-value}
          unit={unit}
          // updateIntervalInSeconds={1}
          numeric="auto"
        >
          {children}
        </FormattedRelativeTime>
      </span>
    );
    /* eslint-enable react/style-prop-object */
  }

  return <span>{defaultValue}</span>;
};

RelativeDateTime.propTypes = {
  date: PropTypes.any,
  defaultValue: PropTypes.node,
  children: PropTypes.func,
};

RelativeDateTime.defaultProps = {
  date: null,
  defaultValue: '',
  children: undefined,
};

export default RelativeDateTime;
