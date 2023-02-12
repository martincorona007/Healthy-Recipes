//store.js - where all states are stored
import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../redux/reducers/profile'

//configureStore API
export const store = configureStore({
  reducer: { login: userReducer}
  
})

///console.log("STATE ",store)
///console.log("STATE ",store.getState())
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;