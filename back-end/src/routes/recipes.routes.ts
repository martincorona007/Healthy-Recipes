import { Router } from "express";
import * as recipeController from '../controllers/recipe.controller';
import { verifyToken } from "../middleware/auth";
const router = Router();

router.post('/api/v1/recipe',verifyToken,recipeController.saveRecipe);//save recipe
router.get('/api/v1/recipes/:user',verifyToken,recipeController.getRecipes);//Get all recipes from user
router.delete('/api/v1/recipe/:id',verifyToken,recipeController.removeRecipe);//DELETE recipe

export default router; 