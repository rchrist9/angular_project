
import { Recipe } from "./recipe.model";
import {  Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService{
  recipesChanged = new Subject<Recipe[]>();
  
  private recipes: Recipe[] = [
    new Recipe('A super-tasty Schnitzel', 'A super-tasty Schnitzel - just awesome!', 'https://www.savoredjourneys.com/wp-content/uploads/2015/10/schnitzel-germany.jpg', [
      new Ingredient('Meat' , 1),
        new Ingredient('French Fries', 20)]),
    new Recipe('Big Fat Burger', 'This is a Test Recipe', 'https://www.redrobin.com/content/dam/web/menu/tavern-menu/tavern-double-burger-1100.jpg', [

      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1 )
    ])

  ];

  constructor(private slService: ShoppingListService) {

  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);

  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
