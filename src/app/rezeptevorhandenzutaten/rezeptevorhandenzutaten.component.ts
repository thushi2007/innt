import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

export interface IRecipe {
    image: string;
    name: string;
    timeToCook: number;
    quickAndEasy: boolean;
    categories: string[];
}


@Component({
    selector: 'aim-rezeptevorhandenzutaten',
    templateUrl: './rezeptevorhandenzutaten.component.html',
    styleUrls: ['./rezeptevorhandenzutaten.component.scss']
})
export class RezeptevorhandenzutatenComponent implements OnInit {
    quickandeasy = false;
    public currentCategory = 'all';

    public recipes: IRecipe[] = [
        {
            name: 'Spaghetti Bolognese',
            image: 'assets/images/food/spaghetti.png',
            timeToCook: 25,
            quickAndEasy: true,
            categories: ['Italienisch']
        },
        {
            name: 'Pizza vom Blech',
            image: 'assets/images/food/pizza.png',
            timeToCook: 40,
            quickAndEasy: false,
            categories: ['Italienisch']
        },
        {
            name: 'Gemüse Lasagne',
            image: 'assets/images/food/lasagne.png',
            timeToCook: 50,
            quickAndEasy: false,
            categories: ['Vegetarisch']
        },
        {
            name: 'Käse Spätzli',
            image: 'assets/images/food/spaetzli.png',
            timeToCook: 30,
            quickAndEasy: true,
            categories:  ['Vegetarisch']
        },
        {
            name: 'Gelbes Curry',
            image: 'assets/images/food/curry.png',
            timeToCook: 35,
            quickAndEasy: true,
            categories: ['Thailändisch', 'Vegan']
        },
        {
            name: 'Gefüllte Tomaten',
            image: 'assets/images/food/gefuellte-tomaten.png',
            timeToCook: 40,
            quickAndEasy: false,
            categories: ['Vegan']
        }
    ];


    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    routeToRezept(): void {
        this.router.navigateByUrl('/rezepte/item');
    }
}
