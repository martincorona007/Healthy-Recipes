import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { readRecipe } from "../../redux/reducers/viewRecipe";
import * as recipeService from "../../services/recipe"
import { useAppSelector } from "../../shared/hooks";
import { getCookie } from "../../shared/utils";
function PreView(){
  
  const [recipe,setRecipe] = useState<any>([]);
  const dispatch = useDispatch(); //update redux
  const recipeClicked = useAppSelector((state : any) => state.recipe); //read recipe clicked
  const recipeView = useAppSelector((state) => state.recipe); //read the recipe clicked
  // const getInfo= async () => {
  //   recipeService.getRecipe(getCookie("recipe") || '').then((response: any) => {
  //     console.log("PreView.tsx ",response)
  //     dispatch(readRecipe({ recipe: response.data }));
  //     setRecipe([response.data.recipe]);
  //   }).catch((e: Error) => {
  //     console.log("Errorr ",e);
  //   })
  // }
  const handlerSaveRecipe = (nameRecipe: React.MouseEvent<Element,MouseEvent>) => {
    console.log("Saved ",nameRecipe)
  }
  useEffect(()=>{
  if(recipeClicked !== null){
    setRecipe([recipeClicked.recipe.recipe]); 
  }
  // if(getCookie("recipe")!== "" && recipeClicked.recipe === '' ){
  //   getInfo()
  // }
   
  },[])
  return(
    <div className="container pt-2">
      <h1 className="text-center">Details Recipe</h1>
      {
        recipe.map((element: any,index: any)=>{
          return(
            <div className="flew-row flex-xs-column" key={index}>
              <div className="card mb-3" style={{maxWidth: "540"}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img className="img-fluid rounded-start size-image" src={element.image} alt="not available"/>
                  </div>
                  <div className="col-md-8 justify-content: space-between">
                    <div className="card-body">
                      <h5 className="card-title">{element.label}</h5>
                      <div >
                        <hr></hr>
                        <h6>Preparation</h6>
                        <div>
                          <a className="btn btn-outline-primary" href={element.url}>Instructions</a>
                          <a> on {element.source}</a>
                        </div>
                        <hr></hr>
                        <div className="align-end">
                          <button className="btn btn-primary" type="button" onClick={()=> handlerSaveRecipe(element.label)}>Save recipe</button>
                        </div>
                      </div>    
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="flex-row flex-xs-column text-center">
                  <h5>Health Labels</h5>
                  {
                    element.healthLabels.map((label: any, index: any) => {
                      return(
                        <span className="badge text-bg-success m-1" key={index}>
                          {label}
                        </span>
                      )
                    })
                  }
                </div>
              </div>
              <div className="container pt-2 pb-5">
                <div className="flex-row flex-xs-column text-start">
                  <h5 className="text-center">Ingredients</h5>
                  {element.ingredientLines.map((element:any,index:any)=>{
                    return <li key={index}>{element}</li>
                  })}
                </div>
              </div>     
            </div>
          )
        })
      }
    </div>
  )

}
export default PreView;