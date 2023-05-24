export const getTitle = (title, data) => {
  if (typeof title === 'string') {
    return { title };
  }
  const { type, precision } = title;

  const sum = data.reduce((acc, x) => acc + x[1], 0);
  const iMax = data.reduce(
    (_iMax, x, i, arr) => (x[1] > arr[_iMax][1] ? i : _iMax),
    0
  );

  const truncateNum = num => {
    const pointNotation = num.toString().split('.');
    if (pointNotation.length === 1) {
      return pointNotation[0];
    }
    return `${pointNotation[0]}.${pointNotation[1].slice(0, precision)}`;
  };
  let primary;
  let secondary;
  const percentage = (100 * data[iMax][1]) / sum;
  switch (type) {
    case 'percent':
      primary = precision
        ? `${truncateNum(percentage)}%`
        : `${Math.round(percentage)}%`;
      [secondary] = data[iMax];
      break;
    case 'max':
      primary = Math.round(data[iMax][1]).toString();
      [secondary] = data[iMax];
      break;
    case 'total':
    default:
      primary = Math.round(sum).toString();
      break;
  }
  return { title: primary, subTitle: secondary };
};
