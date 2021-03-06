import {Injectable} from '@angular/core';

export enum Level {
  EINFACH = 'Einfach', MITTEL = 'Mittel', SCHWER = 'Schwer'
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
  like: boolean;
  saved: boolean;
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
        like: false,
        saved: false,
        ingredients: [
          {
            name: 'Zutat 1',
            amount: 1,
            unit: 'kg',
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
        like: false,
        saved: false,
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
        name: 'Gem??se Lasagne',
        image: 'assets/images/food/lasagne.png',
        timeToCook: 50,
        level: Level.SCHWER,
        categories: ['Vegetarisch'],
        like: false,
        saved: false,
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
        name: 'K??se Sp??tzli',
        image: 'assets/images/food/spaetzli.png',
        timeToCook: 30,
        level: Level.EINFACH,
        categories: ['Vegetarisch'],
        like: false,
        saved: false,
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
        categories: ['Thail??ndisch', 'Vegan'],
        like: false,
        saved: false,
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
        name: 'Gef??llte Tomaten',
        image: 'assets/images/food/gefuellte-tomaten.png',
        timeToCook: 40,
        level: Level.SCHWER,
        categories: ['Vegan'],
        like: false,
        saved: false,
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
