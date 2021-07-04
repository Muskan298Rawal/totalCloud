import axios from "axios";
import {
  GET_USER,
  GET_DETAIL,
  SORT_BY_LNAME,
  SORT_BY_FNAME,
} from "./ActionTypes";

export const getUser = () => {
  return (dispatch) => {
    axios.get("https://reqres.in/api/users?delay=3").then((res) => {
      const response = res.data;
      dispatch({
        type: GET_USER,
        users: response.data,
      });
    });
  };
};

export const userDetail = (url_id) => {
  return (dispatch) => {
    axios.get(`https://reqres.in/api/users/${url_id}`).then((res) => {
      const response = res.data;
      dispatch({
        type: GET_DETAIL,
        userDetail: response.data,
      });
    });
  };
};

export const sortByFirstName = (name) => {
  return (dispatch) => {
    dispatch({
      type: SORT_BY_FNAME,
      name: name,
    });
  };
};

export const sortByLastName = (name) => {
  return (dispatch) => {
    dispatch({
      type: SORT_BY_LNAME,
      name: name,
    });
  };
};
