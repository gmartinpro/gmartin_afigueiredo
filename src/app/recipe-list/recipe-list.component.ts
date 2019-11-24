import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/services/recipes.service';
import { Recipe } from '../models/recipient';
import { Router } from '@angular/router';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(public recipesService: RecipesService, private router: Router) { }

  ngOnInit() {
    this.refreshList();
  }

  deleteAll() {
    this.recipesService.deleteAll();
    this.recipes = this.recipesService.getRecipes();
  }

  addRecipe() {
    this.router.navigateByUrl('add')
  }
  refreshList() {
    this.recipes = this.recipesService.getRecipes();
  }
}
