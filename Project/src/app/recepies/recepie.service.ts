import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Recepie} from './recepie.model';

@Injectable()
export class RecepieService{

  recepieSelected=  new EventEmitter<Recepie>();

private recepies: Recepie[]=[
        new Recepie('A test recepie', 'This is simply a test', 
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/spaghetti-puttanesca_1-1ce4e81.jpg?webp=true&quality=90&resize=440%2C400'
        ,[
          new Ingredient('Buns',1),
          new Ingredient ('French Fries', 20)
        ]),
        new Recepie('Second test recepie', 
        'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/spaghetti-puttanesca_1-1ce4e81.jpg?webp=true&quality=90&resize=440%2C400',
        [
          new Ingredient('Mangoes', 10),
          new Ingredient('Kale', 10)
        ])
      ];


    constructor(private slService: ShoppingListService){}

getRecepies(){
    return this.recepies.slice();
}


getRecepie(index: number){
return this.recepies[index];
}

addIngredientsToShoppingList(ingredients: Ingredient[]){
this.slService.addIngredients(ingredients);
}


}