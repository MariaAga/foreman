import { HOST_POWER_STATUS } from '../../../consts';

export const getHostPowerState = ({ id, url }) => ({
  type: 'API_GET',
  subtype: HOST_POWER_STATUS,
  url,
  payload: { id },
});
