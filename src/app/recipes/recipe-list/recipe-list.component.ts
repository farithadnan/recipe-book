import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Receipe', 'This is a test desc', 'https://shorturl.at/ksBO1')
  ];

  constructor(){}

  ngOnInit(): void {

  }
}
