import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import { Ingredients, Recipe } from "../models/recipient";
import { RecipesService } from 'src/services/recipes.service';
import uuid from 'uuid/v4';
import { Router } from '@angular/router';


@Component({
  selector: "app-recipe-add",
  templateUrl: "./recipe-add.component.html",
  styleUrls: ["./recipe-add.component.scss"]
})
export class RecipeAddComponent implements OnInit {
  recipeForm: FormGroup;
  ingredientsName: Ingredients[] = Object.values(Ingredients);

  constructor(private formBuilder: FormBuilder, private recipesService: RecipesService, private router: Router) { }

  ngOnInit() {
    this.recipeForm = this.createFormGroupWithBuilder(this.formBuilder);
  }

  onSubmit() {
    // Make sure to create a deep copy of the form-model
    const result: Recipe = Object.assign({}, this.recipeForm.value, { id: uuid() });
    this.recipesService.setRecipe(result);
    this.goToList();
    // Do useful stuff with the gathered data

  }

  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      description: ["", [Validators.required, Validators.minLength(10)]],
      preparingTime: ["", [Validators.pattern('[0-9]+')]],
      cookingTime: "",
      steps: formBuilder.array([]),
      ingredients: formBuilder.array([])
    });
  }

  get steps() {
    return this.recipeForm.get("steps") as FormArray;
  }

  get name() {
    return this.recipeForm.get("name");
  }

  get description() {
    return this.recipeForm.get("description");
  }

  get ingredients() {
    return this.recipeForm.get("ingredients") as FormArray;
  }

  addIngredientFormRow() {
    this.ingredients.push(
      this.formBuilder.group({
        name: ["", Validators.required]
      })
    );
  }

  addStepFormRow() {
    this.steps.push(
      this.formBuilder.group({
        explication: ["", Validators.required]
      })
    );
  }

  deleteStep(i: number) {
    this.steps.removeAt(i);
  }

  deleteIngredient(i: number) {
    this.ingredients.removeAt(i);
  }

  goToList() {
    this.router.navigateByUrl('list');
  }
}
