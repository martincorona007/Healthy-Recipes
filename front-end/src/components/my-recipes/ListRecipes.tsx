import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as recipeService from "../../services/recipe";
import { successMessage } from "../../shared/messages";
import { useAppSelector } from "../../shared/hooks";
import { readRecipe } from "../../redux/reducers/viewRecipe";


function ListRecipes() {

  const [list, setList] = useState([]);// get the recipe information
  const [status, setStatus] = useState(false);//when a new user is created there is not recipes, so message is throw to the user about "no recipes yet".
  const userSession = useAppSelector((state) => state.login); // user logged in
  const changeRoute = useNavigate(); //change of enrutador or oath
  const dispatch = useDispatch(); //update redux

  const getRecipesUser = async () => {
    recipeService.getUserListRecipes(userSession.currentUser,userSession.token)
      .then((response: any) => {
        setList(response.data);
        setStatus(false);//when there is a recipe saved the message "No recipes yet" its hidden.
        
      })
      .catch((error: Error) => {
        setStatus(true);
      });
  };

  const handlerCheckOut = (e: React.MouseEvent) => {
    dispatch(readRecipe({ recipe: e }));
    changeRoute("/view");
  };

  const handlerRemove = async(idRecipe: any) => {
    await recipeService.removeRecipe(idRecipe,userSession.token)
      .then((response: any) => {
        successMessage("Recipe removed")
       
      })
      .catch((e: Error) => {
        setStatus(true);
      });
      getRecipesUser();//load the recipes
    
  };
  
  useEffect(() => {
    getRecipesUser();
  }, []);

  return (
    <div style={{ paddingBottom: "20px" }} className="container">
      <h5 className="">List of recipes</h5>
      <div className="row">
        {status === true && <h6 className="text-center">No recipes yet </h6>}
        {status === false && (
          <ul className="list-group">
            {list.map((element: any, index: any) => {
              return (
                <li className="list-group-item d-sm-flex justify-content-between " key={index}>
                  {element.recipeName}
                  <div className="d-flex flex-row flex-xs-column  justify-content-end  ">
                    <button type="button" className="badge btn btn-primary  primary rounded-pill" onClick={() => handlerCheckOut(element.recipeLink)}>
                      Check out 
                    </button>

                    <button type="button" onClick={() => handlerRemove(element._id)} className="badge btn btn-danger  primary rounded-pill  ms-2">
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
export default ListRecipes;
