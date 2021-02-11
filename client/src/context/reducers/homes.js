import {
  HOME_LIST_REQUEST,
  HOME_LIST_SUCCESS,
  HOME_LIST_FAIL,
} from "../constants/homesConstants";

export const homesState = {
  homes: [],
};

export const homesReducer = (state, action) => {
  switch (action.type) {
    case HOME_LIST_REQUEST:
      return { loading: true, homes: [] };
    case HOME_LIST_SUCCESS:
      return { loading: false, homes: action.payload };
    case HOME_LIST_FAIL:
      return { loading: false, homes: [], error: action.payload };
    default:
      return state;
  }
};
