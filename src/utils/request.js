import axios from 'axios';
import { HostAPI, grantType, defautToken } from 'constants';
import { getData } from './index';

const request = async ({
  host = '',
  url = '',
  method = 'GET',
  params = {},
  data = {},
  headers = {},
  _token,
}) => {
  const token = _token || defautToken || (await getData('token')) || '';
  const res = await axios({
    url: `${host || HostAPI}${url}`,
    method,
    data,
    params,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${grantType} ${token}`,
      ...headers,
    },
  });
  return res;
};

export const fakeRequest = response => new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      status: 200,
      data: response,
    });
  }, 1000);
});

export default request;
