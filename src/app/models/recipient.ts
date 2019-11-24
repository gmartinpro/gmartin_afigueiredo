export interface Recipe {
  id: string;
  name: string;
  description: string;
  preparingTime: number;
  cookingTime: number;
  imgUrl?: string;
  steps: Step[];
  ingredients: Ingredient[];
}
export interface Step {
  number: number;
  explication: string;
}
export interface Ingredient {
  name: Ingredients;
  number: number;
  type: TypeNumberIngredient;
}
export type TypeNumberIngredient = "grammes" | "centilitres" | "kilos";
export enum Ingredients {
  TOMATES = "tomates",
  PATATOES = "pomme de terres",
  CARROT = "carrotte"
}
