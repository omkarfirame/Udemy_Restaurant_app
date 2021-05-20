import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredients:Ingredient[]=[
    new Ingredient('Apples',5),
    new Ingredient('Tommato',6),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
