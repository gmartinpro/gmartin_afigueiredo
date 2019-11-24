import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import { Ingredients, Recipe } from "../models/recipient";
import { RecipesService } from 'src/services/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {

  recipeForm: FormGroup;
  id: string;
  recipes: Recipe[];
  ingredientsName: Ingredients[] = Object.values(Ingredients);

  constructor(private router: Router, private formBuilder: FormBuilder, private recipesService: RecipesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.recipeForm = this.createFormGroupWithBuilder(this.formBuilder);
    this.activatedRoute.params.subscribe(params => {
      this.recipes = this.recipesService.getRecipes();
      this.id = params['id'];
      const RECIPE: Recipe = this.recipes.find(x => x.id === this.id);
      this.recipeForm.patchValue({ ...RECIPE });
    })


  }

  onSubmit() {
    // Make sure to create a deep copy of the form-model
    const FILTERED_RECIPES = this.recipes.filter(x => x.id !== this.id);
    FILTERED_RECIPES.push(Object.assign({}, this.recipeForm.value, { id: this.id }));
    // Do useful stuff with the gathered data
    this.recipesService.setRecipes(FILTERED_RECIPES)
    this.goToList();

  }

  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      description: ["", [Validators.required, Validators.minLength(10)]],
      preparingTime: "",
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
    this.router.navigateByUrl('list')
  }
}
