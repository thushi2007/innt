import {Component, OnInit} from '@angular/core';
import {IRecipe, RecipeService} from '../recipe.service';
import {ActivatedRoute} from '@angular/router';

export interface IOrder {
  name: string;
  price: string;
  time: string;
}

@Component({
  selector: 'app-recipe-order',
  templateUrl: './recipe-order.component.html',
  styleUrls: ['./recipe-order.component.scss']
})
export class RecipeOrderComponent implements OnInit {

  public recipe?: IRecipe;
  public orders: IOrder[] = [
    {
      name: 'Lieferdienst 1',
      price: 'CHF 20.-',
      time: '20min'
    },
    {
      name: 'Lieferdienst 2',
      price: 'CHF 25.-',
      time: '50min'
    },
    {
      name: 'Lieferdienst 3',
      price: 'CHF 18.-',
      time: '30min'
    }
  ];

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.recipe = this.recipeService.findOne(+params.id);
    });

  }
}
