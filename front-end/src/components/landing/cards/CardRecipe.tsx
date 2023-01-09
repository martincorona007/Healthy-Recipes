import React from "react";
import { useNavigate } from "react-router-dom";
import PreView from "../../recipe/PreView";
export default function CardRecipe({recipes}: any){

  const changeRoute = useNavigate(); //change of enrutador

  const handlerViewRecipe = (element: any) => {
    //console.log("EL ",element._links.self.href);
    
    changeRoute("/view")
  }
  
  return(
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 row-cols-xl-9 g-4">
      {
        recipes.map((element: any,index: any)=>{
          return(
            <div className="col " key={index} >
              
              <div className="card h-100 card-hover shadow" style={{cursor: "pointer"}} onClick={()=> handlerViewRecipe(element) }>
              
                <img src={element.recipe.image} className="card-img-top" alt="Image not available"/>
                <div className="card-body">
                  <h5 className="card-title">{element.recipe.label}</h5>
                  <hr></hr>
                  <p className="card-text">
                    {element.recipe.ingredients.length} Ingredients
                  </p>
                </div>
                <div className="card-footer text-center">
                  <small className="text-muted">{element.recipe.source}</small>
                </div>

              </div>
            </div>

          )
        })
      }
    </div>
  )
}