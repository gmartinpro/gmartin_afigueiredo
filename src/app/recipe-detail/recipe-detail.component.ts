import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipient';
import { Router } from '@angular/router';
import { RecipesService } from 'src/services/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() delete: EventEmitter<boolean> = new EventEmitter<boolean>();
  public isDisplayed: boolean = false;

  constructor(private router: Router, private recipesService: RecipesService) { }

  getImageUrl(): string {
    return 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.4) 100%),url(' + this.recipe.imgUrl + ');'
  }
  ngOnInit() {
  }
  goToEdit(id) {
    this.router.navigateByUrl('edit/' + id)
  }
  toggleDisplay() {
    this.isDisplayed = !this.isDisplayed;
  }
  deleteOne(id: string) {
    this.recipesService.deleteOne(id);
    this.delete.emit();
  }




}
