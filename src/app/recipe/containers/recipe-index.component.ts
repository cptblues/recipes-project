import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../service/recipe.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as fromModel from '../model/recipe.model';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe-index.component.html',
  styleUrls: ['./recipe-index.component.scss']
})
export class RecipeIndexComponent implements OnInit {
  title = 'recipe-app';
  form: FormGroup;
  recipes: fromModel.RecipeModel;
  value: string;

  constructor(private recipeService: RecipeService,
              private fb: FormBuilder) {}
  ngOnInit() {
    console.log('init');
    this.initForm();
    this.form.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(change => this.search(this.form.get('search').value));
  }

  initForm() {
    this.form = this.fb.group({
      search: ['']
    });
  }

  search(search: string) {
    console.log(search);
    this.recipeService.getRecipe(search).subscribe(res => {
      console.log(res);
      this.recipes = res;
    });
  }
}
