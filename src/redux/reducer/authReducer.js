import { actionTypes } from "../constants/actionTypes";

const initialState = {
  user: {},
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.USER_AUTH:
      return { ...state, user: payload };

    default:
      return state;
  }
};

export const resetUserReducer = (state = initialState, { type }) => {
  switch (type) {
    case actionTypes.RESET_USER:
      return { ...state, user: {} };
    default:
      return state;
  }
};
