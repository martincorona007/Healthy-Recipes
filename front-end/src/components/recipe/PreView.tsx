import React, { useEffect, useState } from "react";
import * as recipeService from "../../services/recipe"
function PreView({data}: any){
  console.log("OUTS ",data)
  
  const [recipe,setRecipe] = useState<any>([]);
  
  const getInfo= async () => {
    recipeService.getRecipe("https://api.edamam.com/api/recipes/v2/bbb9b43ff5959d3ae12cd6a43107cd4e?type=public&app_id=9f27dc3a&app_key=71d0a788bfd813779105487462aab605")
    .then((response: any) => {
      console.log("PreView.tsx ",response)
      setRecipe([response.data.recipe]);
    })
    .catch((e: Error) => {
      console.log("Errorr ",e);
    })
  }
  const handlerSaveRecipe = (nameRecipe: React.MouseEvent<Element,MouseEvent>) => {
    console.log("Saved ",nameRecipe)
  }
  useEffect(()=>{
    getInfo();
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