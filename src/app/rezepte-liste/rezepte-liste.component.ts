import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IRecipe, RecipeService} from '../rezepte.service';


@Component({
    selector: 'aim-rezepte-liste',
    templateUrl: './rezepte-liste.component.html',
    styleUrls: ['./rezepte-liste.component.scss']
})
export class RezepteListeComponent implements OnInit {
    quickandeasy = false;
    public currentCategory = 'all';
    public recipes: IRecipe[];


    constructor(private router: Router, private recipeService: RecipeService) {
    }

    ngOnInit(): void {
        this.recipes = this.recipeService.findAll();
    }

    routeToRezept(recipe: IRecipe): void {
        document.getElementById('device-content').scroll(0, 0);
        this.router.navigate(['/', 'rezepte', recipe.id, 'detail']);
    }
}
