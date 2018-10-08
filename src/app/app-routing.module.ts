import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeIndexComponent } from './recipe/containers/recipe-index.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch: 'full' },
  { path: 'recipe', component: RecipeIndexComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
