import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState ={
    recipe: ''
}

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    readRecipe: (state,action)=> {
      console.log("recipeSlice ",action.payload.recipe)
      state.recipe = action.payload.recipe 
    }
  }
})
export const {readRecipe} = recipeSlice.actions;
export default recipeSlice.reducer;


//select a value from the state
export const selectRecipe = (state: RootState) => state.recipe