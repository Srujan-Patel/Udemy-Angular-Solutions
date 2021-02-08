//Holds our app configuration, we could absolutely add all this in the appmodule.ts file however this is the preferred method, keeps the appmodule a bit leaner

import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'}, // to do lazy loading the declarations in the feature module should not be repeated in the app module
  {path: 'shopping-list', loadChildren:'./shopping-list/shopping-list.module#ShoppingListModule'},
  {path: 'auth', loadChildren:'./auth/auth.module#AuthModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})], //configuration compulsory
  exports: [RouterModule] //can be imported in other modules now
})
export class AppRoutingModule {}
