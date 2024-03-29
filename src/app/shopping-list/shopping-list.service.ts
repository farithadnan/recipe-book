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

  /**
   * Method to add an array of recipe's ingredients to the ingredients array
   * @param ingredients - an array of ingredients to add to the ingredients array
   */
  addIngredients(ingredients: Ingredient[]) {
    // Commented code below is not good because it emits a lot of events
    // for (const ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }

    // Use ES6 spread operator to turn an array of elements into a list of elements
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());

  }
}
