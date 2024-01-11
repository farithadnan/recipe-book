import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 5),
  ];

  constructor(){}

  /**
   * Method to fetch a copy of the ingredients array
   * @returns {Ingredient[]} - a copy of the ingredients array
   */
  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  /**
   * Method to add an ingredient to the ingredients array
   * @param ingredient - an ingredient object to add to the ingredients array
   * @note - The reason why we emit the ingredientChanged event is because we want to notify the shopping-list component that the ingredients array has changed.
   * Without this event, the shopping-list component will not know that the ingredients array has changed and will not update the view.
   */
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
