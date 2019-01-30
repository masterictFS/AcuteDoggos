import { Injectable } from '@angular/core';
import {IHouse} from '../model/IHouse';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  houses: IHouse[];
  constructor() {
    this.houses = [
      {
        'houseId': 1,
        'name': 'Floofer Land',
        'motto': 'woof-woof',
        'description': 'Floof for days',
        'dogIds': [
          2,
          151,
          62,
          232,
          226
        ],
        'headDog': 'Ganwoof the Grey',
        'averageRating': 4.3,
        'color': 'lightseagreen'
      },
      {
        'houseId': 3,
        'name': 'Pupper Heaven',
        'motto': 'bork-bork',
        'description': 'Smol but growing strong',
        'dogIds': [
          89,
          291,
          3,
          72,
          237,
          206,
          53,
          286
        ],
        'headDog': 'Miss Marple',
        'averageRating': 3.5,
        'color': 'gold'
      }
    ];
  }

  getAllHouses(): IHouse[] {
    return this.houses.map(h => h);
  }

  getHouse(id: number): IHouse {
    return this.houses.find(house => house.houseId === id);
  }
}
