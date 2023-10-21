import { combineReducers } from "redux";
import PostsReducer from "./posts";
import UserReducer from "./user";

export default combineReducers({ PostsReducer, UserReducer });
