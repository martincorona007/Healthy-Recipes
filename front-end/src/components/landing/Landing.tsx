
import React, { useEffect, useState } from "react";
import {getRecipes} from '../../services/recipe'
import CardRecipe from "./cards/CardRecipe";
function Landing(){

  const [recipes,setRecipes] = useState([])

  const getDataSetRecipes = async()=>{
    await getRecipes("taco").then((response: any)=>{
      setRecipes(response.data.hits)
    }).catch((e: Error)=> {
      console.log(e);
    })
  }
  useEffect(()=> {
    getDataSetRecipes();
    console.log("useEffect activated");

  },[])
  return(
    <div className="container p-4">
      <CardRecipe recipes={recipes}/>
    </div>
  )
}
export default Landing;