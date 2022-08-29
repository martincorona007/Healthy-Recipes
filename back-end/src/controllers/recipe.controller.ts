import { RequestHandler } from "express";
import Recipe from '../models/recipe.model';

export const saveRecipe : RequestHandler = async(req,res) => {
  try {
    const isAlreadySaved = await Recipe.findOne({recipeLink: req.body.recipeLink});
    if(isAlreadySaved){
      res.status(403).json({message: "Recipe is already saved!"});
    }else{
      const recipe = new Recipe(req.body);
      await recipe.save();
      res.status(200).json({message: "Recipe saved"});
    }
  } catch (e: any) {
    console.log("ERR ",e)
    return res.json(e);
  }
}
export const getRecipes : RequestHandler = async (req,res) => {
  try {
    const recipeFound = await Recipe.find({user: req.params.user});
    if(!recipeFound || recipeFound.length === 0) return res.status(404).json({message: "User not found"});
    return res.json(recipeFound);
  } catch (e: any) {
    console.log("ERR ",e)
    return res.json(e);
  }
}
export const removeRecipe :  RequestHandler = async (req,res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    return res.status(200).json({message: "Recipe removed"})  
  } catch (e: any) {
    console.log("ERR ",e)
    return res.json(e);
  }
}