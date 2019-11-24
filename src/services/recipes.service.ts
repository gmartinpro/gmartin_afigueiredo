import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/models/recipient';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  constructor() { }

  getRecipes(): Recipe[] {
    return JSON.parse(localStorage.getItem('recipes'));
  }
  setRecipes(recipes: Recipe[]): void {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }
  setRecipe(recipe: Recipe) {
    const RECIPES = this.getRecipes() || [];
    RECIPES.push(recipe);
    this.setRecipes(RECIPES);
  }
  deleteAll() {
    localStorage.removeItem('recipes');
  }
  deleteOne(id: string) {
    const RECIPES = this.getRecipes();
    RECIPES.filter(x => x.id !== id);
    this.setRecipes(RECIPES);
  }
}
