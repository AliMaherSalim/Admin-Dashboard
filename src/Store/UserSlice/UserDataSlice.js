import { createSlice } from "@reduxjs/toolkit";


const initialState={
    userDate: {
    }
};

export const userDataSlice = createSlice({
    name:"UserData",
    initialState,
    reducers:{
        addUserData: (state, action) => {
            state.userDate={...action.payload}
        },
        removeUserData: state => {
            state.userDate={};
        }
    }
})


export const {addUserData, removeUserData} = userDataSlice.actions;
export default userDataSlice.reducer;