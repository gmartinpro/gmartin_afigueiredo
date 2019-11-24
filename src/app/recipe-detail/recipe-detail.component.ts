import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe-list/recipe-list.component';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor() { }

  getImageUrl(): string {
    return 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.4) 100%),url(' + this.recipe.imgUrl + ');'
  }
  ngOnInit() {
  }

}
