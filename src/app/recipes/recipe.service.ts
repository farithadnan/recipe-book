import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else do you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/1/11/Cheeseburger.png',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    )
  ];

  /**
   * Method to return a new array which is an exact copy of the recipes array
   * @returns Return an exact copy of the recipes array
   * @note Without the slice() method, the recipes array would be returned by reference, which would allow the array to be modified outside of this service
   * @note The slice() method without any arguments returns a copy of the array. Prevents the array from being modified outside of this service.
   */
  getRecipes() {
    return this.recipes.slice();
  }
}
