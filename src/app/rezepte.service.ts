import {Injectable} from '@angular/core';

export enum Level {
    EINFACH = 'Einfach', MITTEL = 'Mittel', SCHWER = 'Schwert'
}

export interface IIngredient{
    name: string;
    amount: number;
    unit: string;
}

export interface IRecipe {
    id: number;
    image: string;
    name: string;
    timeToCook: number;
    level: Level;
    categories: string[];
    ingredients: IIngredient[];
}

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    findAll(): IRecipe[] {
        return [
            {
                id: 1,
                name: 'Spaghetti Bolognese',
                image: 'assets/images/food/spaghetti.png',
                timeToCook: 25,
                level: Level.EINFACH,
                categories: ['Italienisch'],
                ingredients: [
                    {
                        name: 'Zutat 1',
                        amount: 1,
                        unit: 'kg'
                    },
                    {
                        name: 'Zutat 2',
                        amount: 200,
                        unit: 'g'
                    },
                    {
                        name: 'Zutat 4',
                        amount: 3,
                        unit: 'Stk.'
                    },
                    {
                        name: 'Zutat 5',
                        amount: 1,
                        unit: 'Messerspitze'
                    },
                    {
                        name: 'Zutat 6',
                        amount: 150,
                        unit: 'g'
                    }
                ]
            },
            {
                id: 2,
                name: 'Pizza vom Blech',
                image: 'assets/images/food/pizza.png',
                timeToCook: 40,
                level: Level.MITTEL,
                categories: ['Italienisch'],
                ingredients: [
                    {
                        name: 'Zutat 1',
                        amount: 1,
                        unit: 'kg'
                    },
                    {
                        name: 'Zutat 2',
                        amount: 200,
                        unit: 'g'
                    },
                    {
                        name: 'Zutat 4',
                        amount: 3,
                        unit: 'Stk.'
                    },
                    {
                        name: 'Zutat 5',
                        amount: 1,
                        unit: 'Messerspitze'
                    },
                    {
                        name: 'Zutat 6',
                        amount: 150,
                        unit: 'g'
                    }
                ]
            },
            {
                id: 3,
                name: 'Gemüse Lasagne',
                image: 'assets/images/food/lasagne.png',
                timeToCook: 50,
                level: Level.SCHWER,
                categories: ['Vegetarisch'],
                ingredients: [
                    {
                        name: 'Zutat 1',
                        amount: 1,
                        unit: 'kg'
                    },
                    {
                        name: 'Zutat 2',
                        amount: 200,
                        unit: 'g'
                    },
                    {
                        name: 'Zutat 4',
                        amount: 3,
                        unit: 'Stk.'
                    },
                    {
                        name: 'Zutat 5',
                        amount: 1,
                        unit: 'Messerspitze'
                    },
                    {
                        name: 'Zutat 6',
                        amount: 150,
                        unit: 'g'
                    }
                ]
            },
            {
                id: 4,
                name: 'Käse Spätzli',
                image: 'assets/images/food/spaetzli.png',
                timeToCook: 30,
                level: Level.EINFACH,
                categories: ['Vegetarisch'],
                ingredients: [
                    {
                        name: 'Zutat 1',
                        amount: 1,
                        unit: 'kg'
                    },
                    {
                        name: 'Zutat 2',
                        amount: 200,
                        unit: 'g'
                    },
                    {
                        name: 'Zutat 4',
                        amount: 3,
                        unit: 'Stk.'
                    },
                    {
                        name: 'Zutat 5',
                        amount: 1,
                        unit: 'Messerspitze'
                    },
                    {
                        name: 'Zutat 6',
                        amount: 150,
                        unit: 'g'
                    }
                ]
            },
            {
                id: 5,
                name: 'Gelbes Curry',
                image: 'assets/images/food/curry.png',
                timeToCook: 35,
                level: Level.EINFACH,
                categories: ['Thailändisch', 'Vegan'],
                ingredients: [
                    {
                        name: 'Zutat 1',
                        amount: 1,
                        unit: 'kg'
                    },
                    {
                        name: 'Zutat 2',
                        amount: 200,
                        unit: 'g'
                    },
                    {
                        name: 'Zutat 4',
                        amount: 3,
                        unit: 'Stk.'
                    },
                    {
                        name: 'Zutat 5',
                        amount: 1,
                        unit: 'Messerspitze'
                    },
                    {
                        name: 'Zutat 6',
                        amount: 150,
                        unit: 'g'
                    }
                ]
            },
            {
                id: 6,
                name: 'Gefüllte Tomaten',
                image: 'assets/images/food/gefuellte-tomaten.png',
                timeToCook: 40,
                level: Level.SCHWER,
                categories: ['Vegan'],
                ingredients: [
                    {
                        name: 'Zutat 1',
                        amount: 1,
                        unit: 'kg'
                    },
                    {
                        name: 'Zutat 2',
                        amount: 200,
                        unit: 'g'
                    },
                    {
                        name: 'Zutat 4',
                        amount: 3,
                        unit: 'Stk.'
                    },
                    {
                        name: 'Zutat 5',
                        amount: 1,
                        unit: 'Messerspitze'
                    },
                    {
                        name: 'Zutat 6',
                        amount: 150,
                        unit: 'g'
                    }
                ]
            }
        ];
    }

    findOne(id: number): IRecipe {
        return this.findAll().filter(r => r.id === id)?.[0];
    }


}
