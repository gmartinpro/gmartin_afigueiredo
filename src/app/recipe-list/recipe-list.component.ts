import { Component, OnInit } from '@angular/core';

export interface Step {
  id: number;
  text: string;
}
export interface Ingredient {
  id: number;
  name: string;
}

export interface Recipe {
  id: number;
  title: string;
  ingredients: Ingredient[];
  preparatingTime: number;
  cuisson: number;
  imgUrl: string;
  steps: Step[];
}

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor() { }

  ngOnInit() {
    this.recipes = [
      {
        id: 1,
        title: 'Carottes rapées',
        ingredients: [{ id: 1, name: 'carotte' }],
        preparatingTime: 0,
        cuisson: 0,
        imgUrl: 'https://static.cuisineaz.com/610x610/i30967-carottes-rapees-a-l-orange.jpg',
        steps: [{ id: 1, text: 'Raper les carottes' }]
      },
      {
        id: 2,
        title: 'Carottes rapées 2',
        ingredients: [{ id: 1, name: 'carotte' }],
        preparatingTime: 5,
        imgUrl: 'https://static.cuisineaz.com/610x610/i30967-carottes-rapees-a-l-orange.jpg',
        cuisson: 0,
        steps: [{ id: 1, text: 'Raper les carottes' }]
      },
      {
        id: 3,
        title: 'Carottes rapées 3',
        ingredients: [{ id: 1, name: 'carotte' }],
        preparatingTime: 5,
        imgUrl: 'https://static.cuisineaz.com/610x610/i30967-carottes-rapees-a-l-orange.jpg',
        cuisson: 0,
        steps: [{ id: 1, text: 'Raper les carottes' }]
      },
    ];
  }

}
