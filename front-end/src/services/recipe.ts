import axios from "axios";
import {contentHeader} from './auth-header'
export const getRecipes = (name: string) => {
  return axios.get(`${process.env.REACT_APP_RESTFULL_API}type=${process.env.REACT_APP_TYPE}&q=${name}&app_id=${
    process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`,{headers:contentHeader()});
}
export const getRecipe = (name: string) => {
  return axios.get(`${name}`,{headers: contentHeader()});
}