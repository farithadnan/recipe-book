import { Recipe } from "./recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Receipe A', 'This is a test desc', 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRJq2vVch6OckJUbbnPW_kxkLiHphep6OrUZ5ZM-oVjBGQfDi64GSYoqA%26s&sp=1704199690T94a86eea0abb59fcfc000c489719d5f256b81ec7033a5092e48fd709b0d79c75'),
    new Recipe('A Test Receipe B', 'This is a test desc', 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRJq2vVch6OckJUbbnPW_kxkLiHphep6OrUZ5ZM-oVjBGQfDi64GSYoqA%26s&sp=1704199690T94a86eea0abb59fcfc000c489719d5f256b81ec7033a5092e48fd709b0d79c75')
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
