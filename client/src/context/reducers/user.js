import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
} from "../constants/userConstants";

export const userState = {
  user: null,
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true, user: null };
    case USER_LOGIN_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, user: null, error: action.payload };
    case USER_LOGOUT:
      return { loading: false, user: null };
    default:
      return state;
  }
};
