import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./UserSlice/UserDataSlice";

export const store= configureStore({
    reducer: {userData: userDataReducer}
});