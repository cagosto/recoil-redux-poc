import axios from 'axios';
const { selector } = require('recoil');

export const users = selector({
  key: 'CurrentUserName',
  get: async ({ get }) => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    return response.data;
  },
});
