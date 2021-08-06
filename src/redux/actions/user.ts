import { Dispatch } from "react";
import { IUser } from "../../models";
import { UserTypes } from "../types";

export const setUser = (user: IUser) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: UserTypes.SET_CURRENT_USER, payload: user });
  };
};

export const removeUser = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: UserTypes.DEL_CURRENT_USER });
  };
};
export const addUser = (user: IUser) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: UserTypes.SET_USER, payload: user });
  };
};

export const deleteUser = (id: number) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: UserTypes.DEL_USER, payload: id });
  };
};

export const editUser = (user: IUser) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: UserTypes.EDIT_USER, payload: user });
  };
};
