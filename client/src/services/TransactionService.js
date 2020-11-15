import http from '../helpers/http-common';
const getByPeriods = (period) => {
  return http.get(`/?period=${period}`);
};
export default {
  getByPeriods,
};
