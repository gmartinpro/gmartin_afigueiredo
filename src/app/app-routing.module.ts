import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeAddComponent } from "./recipe-add/recipe-add.component";
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: RecipeListComponent },
  { path: 'add', component: RecipeAddComponent },
  { path: 'edit/:id', component: EditRecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
