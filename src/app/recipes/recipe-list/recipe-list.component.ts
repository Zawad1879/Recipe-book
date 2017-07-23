import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe("Bhuna Khichuri","A classic Bengali dish","http://www.bdfoodnavi.com/files/images/foods/original/orig_573843c8065c681c62882921c7868b9ce4dbdb37.jpg",[]),
    new Recipe("Bread & Jam","Part and parcel of an Englishman's breakfast","https://thumbs.dreamstime.com/x/bread-jam-knife-10428273.jpg",[])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe : Recipe){
	this.recipeSelected.emit(recipe);
  }

}
