
import React, { useEffect, useState } from "react";
import {getRecipes} from '../../services/recipe'
import { useAppSelector } from "../../shared/hooks";
import CardRecipe from "./cards/CardRecipe";
function Landing(){

  const [recipes,setRecipes] = useState([])
  const histories = useAppSelector((state) => state.search); //read the input data from header, and get the value
  
  const newSearch = histories[histories.length - 1].searchStack;//get the history tiped by the user, and pull out the newest data 
  
  const getDataSetRecipes = async()=>{
    await getRecipes(newSearch).then((response: any)=>{
      setRecipes(response.data.hits)
    }).catch((e: Error)=> {
      console.log(e);
    })
  }
  useEffect(()=> {
    getDataSetRecipes();
    console.log("useEffect activated");

  },[newSearch])
  return(
    <div className="container p-4">
      <CardRecipe recipes={recipes}/>
    </div>
  )
}
export default Landing;