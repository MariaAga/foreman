import { intl } from '../../react_app/common/I18n';

const enums = {
  SIZE: {
    LARGE: { height: 500 },
    REGULAR: { width: 240, height: 240 },
    MEDIUM: { width: 320, height: 320 },
  },
  WIDTH: {
    SMALL: 15,
    MEDIUM: 20,
    LARGE: 25,
  },
};

const barChartEnums = {
  SIZE: {
    LARGE: { height: 500 },
    REGULAR: { width: 350, height: 350 },
    MEDIUM: { width: 450, height: 320 },
    SMALL: { height: 290 },
  },
  WIDTH: { ...enums.width },
};

const lineChartEnums = {
  SIZE: {
    REGULAR: { width: 1000, height: 350 },
  },
  WIDTH: { ...enums.width },
};

export const chartConfig = {
  colorScale: {
    pattern: ['#0088ce', '#ec7a08', '#3f9c35', '#005c66', '#f9d67a', '#703fec'],
  },
  ...enums.SIZE.REGULAR,
};

export const donutChartConfig = {
  ...chartConfig,
    width: enums.WIDTH.SMALL,
};

export const donutMediumChartConfig = {
  ...donutChartConfig,
  ...enums.SIZE.MEDIUM,
};

export const donutLargeChartConfig = {
  ...donutChartConfig,
  ...enums.SIZE.LARGE,
};

export const barChartConfig = {
  ...chartConfig,
  ...barChartEnums.SIZE.REGULAR,
  padding: null,
};

export const mediumBarChartConfig = {
  ...barChartConfig,
  ...barChartEnums.SIZE.MEDIUM,
};

export const smallBarChartConfig = {
  ...barChartConfig,
  ...barChartEnums.SIZE.SMALL,
};

export const lineChartConfig = {
  ...chartConfig,
  legend: { show: true },
  ...lineChartEnums.SIZE.REGULAR,
  padding: null,
};

export const timeseriesLineChartConfig = {
  ...lineChartConfig,
  axis: {
    x: {
      type: 'timeseries',
      tick: {
        format: date => new Intl.DateTimeFormat(intl.locale).format(date),
        rotate: -40,
      },
    },
  },
  padding: {
    top: 10,
    bottom: 70,
    left: 30,
    right: 20,
  },
};
