import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {

	recipes : Recipe[] = [
    new Recipe("Bhuna Khichuri","A classic Bengali dish","http://www.bdfoodnavi.com/files/images/foods/original/orig_573843c8065c681c62882921c7868b9ce4dbdb37.jpg",[
    	new Ingredient('Chaal', 2),
    	new Ingredient('Egg',1)
    	]),
    new Recipe("Bread & Jam","Part and parcel of an Englishman's breakfast","https://thumbs.dreamstime.com/x/bread-jam-knife-10428273.jpg",[])
  	];

  constructor() { }

  getRecipes() {
  	return this.recipes;
  }
}
