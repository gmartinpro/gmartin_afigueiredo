import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import { Ingredients, Recipe } from "../models/recipient";

@Component({
  selector: "app-recipe-add",
  templateUrl: "./recipe-add.component.html",
  styleUrls: ["./recipe-add.component.scss"]
})
export class RecipeAddComponent implements OnInit {
  recipeForm: FormGroup;
  ingredientsName: Ingredients[] = Object.values(Ingredients);

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.recipeForm = this.createFormGroupWithBuilder(this.formBuilder);
  }

  onSubmit() {
    // Make sure to create a deep copy of the form-model
    const result: Recipe = Object.assign({}, this.recipeForm.value);

    // Do useful stuff with the gathered data
    console.log(result);
  }

  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      description: ["", [Validators.required, Validators.minLength(20)]],
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
}
