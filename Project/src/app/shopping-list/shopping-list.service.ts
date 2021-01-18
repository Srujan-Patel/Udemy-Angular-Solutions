import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService{
IngredientsChanged = new EventEmitter<Ingredient[]>(); 
private ingredients: Ingredient[] = [
new Ingredient('Apples',5), 
    new Ingredient('Tomatoes', 10), ];

getIngredients(){
    return this.ingredients.slice();
}
addIngredient(ingredinet: Ingredient){
this.ingredients.push(ingredinet);
this.IngredientsChanged.emit(this.ingredients.slice());
}

addIngredients(ingredients: Ingredient[]){

this.ingredients.push(...ingredients);
this.IngredientsChanged.emit(this.ingredients.slice());

}
}