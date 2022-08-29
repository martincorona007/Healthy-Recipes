import { Router } from "express";
import * as recipeController from '../controllers/recipe.controller';

const router = Router();

router.post('/api/v1/recipe',recipeController.saveRecipe);//save recipe
router.get('/api/v1/recipes/:user',recipeController.getRecipes);//Get all recipes from user
router.delete('/api/v1/recipe/:id',recipeController.removeRecipe);//DELETE recipe

export default router;