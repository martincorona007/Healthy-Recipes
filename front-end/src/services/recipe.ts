import axios from "axios";
import { IRecipeSave } from "../interfaces/IRecipe";
import {contentHeader,contentAndAuthToken} from './auth-header'
export const getRecipes = (name: string) => {
  
  return axios.get(`${process.env.REACT_APP_RESTFULL_API}type=${process.env.REACT_APP_TYPE}&q=${name}&app_id=${
    process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`,{headers:contentHeader()});
}
export const getRecipe = (id: string) => {
  return axios.get(`${process.env.REACT_APP_RESTFULL_API2}${id}?type=${process.env.REACT_APP_TYPE}&app_id=${
    process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`,{headers:contentHeader()});
}

export const saveRecipe = (recipe: IRecipeSave,token: string) => {
  console.log("TO POST ",recipe," and ",token)
  return axios.post(`${process.env.REACT_APP_APIBACK}/api/v1/recipe`,recipe,{headers: contentAndAuthToken(token)});
  
}
export const getUserListRecipes = (user: string,token: string) => {
  return axios.get(`${process.env.REACT_APP_APIBACK}/api/v1/recipes/${user}`,{headers: contentAndAuthToken(token)})
  
}
export const removeRecipe = (idRecipe: string,token: string) => {
   return axios.delete(`${process.env.REACT_APP_APIBACK}/api/v1/recipe/${idRecipe}`,{headers: contentAndAuthToken(token)})
}
export const nextPage = (nextPage: string) => {
  console.log("--> newpage ",nextPage)
  return  axios.get(`${nextPage}`,{headers: contentHeader()});
}