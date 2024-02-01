import { EventEmitter, Inject, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({ providedIn: 'root' })
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

  constructor(private shoppingListService: ShoppingListService) {}

  /**
   * Method to return a new array which is an exact copy of the recipes array
   * @returns Return an exact copy of the recipes array
   * @note Without the slice() method, the recipes array would be returned by reference, which would allow the array to be modified outside of this service
   * @note The slice() method without any arguments returns a copy of the array. Prevents the array from being modified outside of this service.
   */
  getRecipes() {
    return this.recipes.slice();
  }

  /**
   * Method to return recipe information
   * @param index Item Index
   * @returns recipe detail
   */
  getRecipe(index: number) {
    return this.recipes[index];
  }

  /**
   * Method to add an array of recipe's ingredients to the shopping list via the shopping list service
   * @param ingredients - an array of recipe's ingredients to add to the shopping list
   */
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
