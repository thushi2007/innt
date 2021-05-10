import {Component, OnInit} from '@angular/core';
import {IRecipe, RecipeService} from '../rezepte.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'aim-rezept-detail',
    templateUrl: './rezept-detail.component.html',
    styleUrls: ['./rezept-detail.component.scss']
})
export class RezeptDetailComponent implements OnInit {
    public recipe: IRecipe;
    person = 1;

    constructor(private recipeService: RecipeService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.recipe = this.recipeService.findOne(+params.id);
        });

    }

}
