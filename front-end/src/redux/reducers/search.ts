import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = [
  {
    searchStack: 'Chicken'
  }
];
export const recipeSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchRecipe: (state,action)=> {
      state.push(action.payload);
    }
    
  }
})
export const {searchRecipe} = recipeSlice.actions;
export default recipeSlice.reducer;


//select a value from the state
export const selectRecipe = (state: RootState) => state.search.values