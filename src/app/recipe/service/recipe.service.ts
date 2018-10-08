import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  foodURL = 'https://api.edamam.com/api/food-database/parser';
  recipeURL = 'https://api.edamam.com/search';
  app_id = 'e522e8de';
  app_key = '95777ec30fa9a7e8622ac76994e9fcd2';

  recipe_id = '952fcf23';
  recipe_key = '58dc88e164fcfaf2178616be87ee1870';
  constructor(private http: HttpClient) {}

  getFood(search: string): Observable<any> {
    return this.http.get<any>(this.foodURL + '?app_id=' + this.app_id + '&app_key=' + this.app_key + '&ingr=' + search);
  }

  getRecipe(search: string): Observable<any> {
    return this.http.get<any>(
      this.recipeURL + '?app_id='
      + this.recipe_id + '&app_key='
      + this.recipe_key + '&q=' + search + '&from=1&to=4'
    );
  }
}
