import {
  GET_USER,
  GET_DETAIL,
  SORT_BY_FNAME,
  SORT_BY_LNAME,
} from "../Actions/ActionTypes";

const initialState = {
  users: [],
  userDetail: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER: {
      let temp = action.users;
      return {
        ...state,
        users: temp,
      };
    }
    case GET_DETAIL: {
      let temp = action.userDetail;
      return {
        ...state,
        userDetail: temp,
      };
    }
    case SORT_BY_FNAME: {
      const { users } = state;
      let temp = users;
      temp.sort((a, b) => {
        if (a.first_name < b.first_name) {
          return -1;
        }
        if (a.first_name > b.first_name) {
          return 1;
        }
        return 0;
      });
      return {
        ...state,
        users: temp,
      };
    }
    case SORT_BY_LNAME: {
      const { users } = state;
      let temp = users;
      temp.sort((a, b) => {
        if (a.last_name < b.last_name) {
          return -1;
        }
        if (a.last_name > b.last_name) {
          return 1;
        }
        return 0;
      });
      return {
        ...state,
        users: temp,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
