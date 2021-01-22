import { from, Subscription } from 'rxjs';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';
export class ShoppingListService{
IngredientsChanged = new Subject<Ingredient[]>(); 
private ingredients: Ingredient[] = [

    new Ingredient('Apples',5), 
    new Ingredient('Tomatoes', 10), ];

getIngredients(){
    return this.ingredients.slice();
}
addIngredient(ingredinet: Ingredient){
this.ingredients.push(ingredinet);
this.IngredientsChanged.next(this.ingredients.slice());
}

addIngredients(ingredients: Ingredient[]){

this.ingredients.push(...ingredients);
this.IngredientsChanged.next(this.ingredients.slice());

}
}