import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as recipeService from "../../services/recipe"
import { useAppSelector } from "../../shared/hooks";
import { successMessage, warningMessage } from "../../shared/messages";

function PreView(){
  
  const [recipe,setRecipe] = useState<any>([]);
  const recipeClicked = useAppSelector((state : any) => state.recipe); //read recipe clicked
  const userSession = useAppSelector((state) => state.login);

  const getInfo= async () => {
    recipeService.getRecipe(recipeClicked.recipe).then((response: any) => {
      setRecipe([response.data.recipe]);
    }).catch((e: Error) => {
    
    })
  }
  const handlerSaveRecipe = (nameRecipe: React.MouseEvent<Element,MouseEvent>) => {
    recipeService.saveRecipe({ user: userSession.currentUser,recipeLink: recipeClicked.recipe,recipeName: nameRecipe,},userSession.token)
      .then((response: any) => {
        successMessage(response.data.message);
      })
      .catch((e: any) => {
        if (e.response.data.message) {
          warningMessage(e.response.data.message);
        }
      }
      );
  }

  useEffect(()=>{
    getInfo()
  // if(recipeClicked !== null){
  //   setRecipe([recipeClicked.recipe.recipe]); 
  // }
  // if(getCookie("recipe")!== "" && recipeClicked.recipe === '' ){
  //   
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
                          {userSession.isLoggedIn === true && (
                            <button type="button" className="btn btn-primary"onClick={() => handlerSaveRecipe(element.label)}>
                              Save recipe
                            </button>
                          )}
                          {userSession.isLoggedIn === false && (
                            <Link to="/login">
                              <button type="button" className="btn btn-primary">
                                Log in to save
                              </button>
                            </Link>
                          )}
                            
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