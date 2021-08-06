import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "../storage";
import userReducer from "./user";
import taskReducer from "./task";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "task"],
};

const reducers = combineReducers({
  user: userReducer,
  task: taskReducer,
});

export default persistReducer(persistConfig, reducers);
