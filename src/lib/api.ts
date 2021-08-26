import axios from 'axios';

export const apiGet = <P>({ url, params }: { url: string; params?: P }) => {
  return axios.get(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    params,
  });
};
