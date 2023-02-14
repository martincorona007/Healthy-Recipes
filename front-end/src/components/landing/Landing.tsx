
import React, { useEffect, useState } from "react";
import {getRecipes} from '../../services/recipe'
import { useAppSelector } from "../../shared/hooks";
import CardRecipe from "./cards/CardRecipe";
import * as recipeService from "../../services/recipe"
function Landing(){

  const [recipes,setRecipes] = useState([])
 
  const histories = useAppSelector((state) => state.search); //read the input data from header, and get the value
  const [next, setNext] = useState("");//get link for new set {1..20} of recipes
  
  const [found, setFound] =useState(true);//throw a message of incorrect search or recipe not found
  const newSearch = histories[histories.length - 1].searchStack;//get the history tiped by the user, and pull out the newest data 
  
  const getDataSetRecipes = async()=>{
    await getRecipes(newSearch).then((response: any)=>{
      setNext(response.data._links.next.href);//set the next set of recipes
      setRecipes(response.data.hits)
      setFound(true);//remove warnings
    }).catch((e: Error)=> {
      setFound(false);//remove warnings
    })
  }
  const handlerNextPage = () => {
    recipeService
      .nextPage(next)
      .then((response: any) => {
      //console.log("from next page ",response)
        setRecipes(response.data.hits);
        setNext(response.data._links.next.href);
      })
      .catch((e: Error) => {
      //  console.log("nel ", e);
      });

  };
  useEffect(()=> {
    getDataSetRecipes();
    //console.log("useEffect activated");

  },[newSearch])
  return(
    <div className="container p-4">
      {
        found === true && (
          <CardRecipe recipes={recipes}/>
        )
      }

      {
        found === true && (
          <nav aria-label="Page navigation example  ">
          <ul className="pagination justify-content-center pt-4">
            <li className="page-item">
              <a className="btn btn-success" onClick={handlerNextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
        )
      }
      {
        found === false && (
          <div className="container pt-3 ">
            <h3>Search tips</h3>
              <li>Make sure that all words are spelled correctly</li>
              <li>Try using a different search term</li>
              <li>Simplify your search eg. chicken salad</li>
          </div>
        )
      }
    </div>
  )
}
export default Landing;