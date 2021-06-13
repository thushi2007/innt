import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IRecipe, RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  quickandeasy = false;
  public currentCategory = 'all';
  public recipes?: IRecipe[];


  constructor(private router: Router, private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.findAll();
  }

  routeToRecipe(recipe: IRecipe): void {
    document.getElementById('device-content')?.scroll(0, 0);
    this.router.navigate(['/', 'recipe', recipe.id, 'detail']);
  }

}
