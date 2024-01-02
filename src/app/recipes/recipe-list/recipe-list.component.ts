import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Receipe A', 'This is a test desc', 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRJq2vVch6OckJUbbnPW_kxkLiHphep6OrUZ5ZM-oVjBGQfDi64GSYoqA%26s&sp=1704199690T94a86eea0abb59fcfc000c489719d5f256b81ec7033a5092e48fd709b0d79c75'),
    new Recipe('A Test Receipe B', 'This is a test desc', 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRJq2vVch6OckJUbbnPW_kxkLiHphep6OrUZ5ZM-oVjBGQfDi64GSYoqA%26s&sp=1704199690T94a86eea0abb59fcfc000c489719d5f256b81ec7033a5092e48fd709b0d79c75')
  ];

  constructor(){}

  ngOnInit(): void {

  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
