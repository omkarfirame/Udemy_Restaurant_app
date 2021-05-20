import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipie.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent{
  recipes: Recipe[];
  constructor(private recipeService:RecipeService) { 
    this.recipes = this.recipeService.getRecipe();

  }
}
