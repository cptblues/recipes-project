export interface RecipeModel {
 hints: Food[];
 text: string;
}

export interface Food {
  brand: string;
  foodContentsLabel: string;
  foodId: string;
  label: string;
  nutriments: Nutriments;
  source: string;
  uri: string;
}

interface Nutriments {
  ENERC_KCAL: number;
  PROCNT: number;
  FAT: number;
  CHOCDF: number;
}
