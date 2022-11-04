import { reducerIncOrDec } from "./upDown";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  reducerIncOrDec,
  // changeBackGround, agar aisa hota to
});
export default rootReducer;
