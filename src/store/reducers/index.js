import * as actionTypes from '../actions/actionTypes';

const initialState = {
  usersList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USERS_LIST:
      return {
        ...state,
        usersList:
          state.usersList.length > 0
            ? [...state.usersList, action.payload]
            : action.payload,
      };
    case actionTypes.REMOVE_USER:
      return {
        ...state,
        usersList: [...state.usersList].filter((u) => u.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
