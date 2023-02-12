import { createSlice } from "@reduxjs/toolkit";
import { Types } from "../actions/types";
import { RootState } from "../store";


export const initialState =  {
    currentUser: "",
    isLoggedIn: false,
    token: ""
}
export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    
    logIn: (state,action) => {

      state.currentUser = action.payload.currentUser
      state.isLoggedIn = action.payload.isLoggedIn 
      state.token = action.payload.token 
      
    },
    logOut: (state,action) => {
      state.currentUser = action.payload.currentUser
      state.isLoggedIn = action.payload.isLoggedIn 
      state.token = action.payload.token 
    }

  }
})
export const {logIn,logOut} = userSlice.actions;
export default userSlice.reducer;

//select a value from the state
export const selectUser = (state: RootState) => state.login