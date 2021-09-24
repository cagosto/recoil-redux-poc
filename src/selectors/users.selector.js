import axios from 'axios';
const { selector } = require('recoil');

export const users = selector({
  key: 'CurrentUserName',
  get: () => {
    return axios
      .get(`${process.env.REACT_APP_DOMAIN}/users`)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        throw error;
      });
  },
});
