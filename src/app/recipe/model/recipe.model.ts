export interface RecipeModel {
  count: number;
  from: number;
  more: boolean;
  q: string;
  to: number;
  hits: Hits[];
}

interface Hits {
  bookmarked: boolean;
  bought: boolean;
  recipe: Recipe;
}

interface Recipe {
  ingredientLines: string[];
  ingredients: Ingredient;
  calories: number;
  image: string;
  label: string;
  source: string;
  totalTime: number;
  totalWeight: number;
  uri: string;
  url: string;
  yield: number;
}

interface Ingredient {
  text: string;
  weight: number;
}
