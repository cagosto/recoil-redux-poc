import * as actionTypes from '../actions/actionTypes';

import axios from 'axios';

export const setUsersList = (payload) => ({
  type: actionTypes.SET_USERS_LIST,
  payload,
});

export const removeUser = (payload) => ({
  type: actionTypes.REMOVE_USER,
  payload,
});

export const getUserList = () => (dispatch) => {
  axios.get(`${process.env.REACT_APP_DOMAIN}/users`).then(
    (data) => {
      const results = data.data;

      dispatch(setUsersList(results));
    },
    (error) => {
      console.log(error);
    }
  );
};

export const postNewUser = (data) => (dispatch) => {
  axios.post(`${process.env.REACT_APP_DOMAIN}/users`, data).then((data) => {
    const results = data.data;

    dispatch(setUsersList(results));
  });
};
