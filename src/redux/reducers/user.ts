import { IUser } from "../../models";
import { UserTypes } from "../types";

const INITIAL_STATE = {
  currentUser: null,
  users: [],
};

const userReducer = (
  state = INITIAL_STATE,
  action: { type: string; payload: any }
) => {
  if (action.type === UserTypes.SET_CURRENT_USER) {
    return { ...state, currentUser: action.payload };
  } else if (action.type === UserTypes.DEL_CURRENT_USER) {
    return { ...state, currentUser: null };
  } else if (action.type === UserTypes.SET_USER) {
    return { ...state, users: [...state.users, action.payload] };
  } else if (action.type === UserTypes.DEL_USER) {
    return {
      ...state,
      users: state.users.filter((user: IUser) => user.id !== action.payload),
    };
  } else if (action.type === UserTypes.EDIT_USER) {
    const users: IUser[] = [...state.users];
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === action.payload.id) {
        if (action.payload.mobile) {
          users[i].mobile = action.payload.mobile;
        }
        if (action.payload.password) {
          users[i].password = action.payload.password;
        }
        if (action.payload.email) {
          users[i].email = action.payload.email;
        }
        break;
      }
    }
    return { ...state, users: [...users] };
  }
  return state;
};

export default userReducer;
