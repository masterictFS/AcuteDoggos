import { Component } from '@angular/core';

@Component({
  selector: 'app-doghouse-list',
  templateUrl: './doghouse-list.component.html',
  styleUrls: ['./doghouse-list.component.css']
})
export class DoghouseListComponent {
  title: string;
  _filterText: string;
  showDescription: boolean;

  doghouses: any[];
  filteredDoghouses: any[];

  showDogList = 0;

  get filterText() {
    return this._filterText;
  }

  set filterText(filterText: string) {
    this._filterText = filterText;
    this.filteredDoghouses = this.doghouses.map(house => house);
    this.applyFilter(this._filterText);
  }

  constructor() {
    this.title = 'The Doggo Neighborhood™';
    // this._filterText = 'Hamburgers';
    this.showDescription = false;
    this.doghouses = [
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
    this.filteredDoghouses = this.doghouses.map(house => house);
  }

  toggleDescription(): void {
    this.showDescription = !this.showDescription;
  }

  applyFilter(filterText: string): void {
    if (filterText && filterText.length > 0) {
      this.filteredDoghouses = this.doghouses.filter(house => house.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0);
    }
  }

  onStarRatingActivated(value: number, dogHouse: any): void {
    dogHouse.averageRating += 0.1;
    if (dogHouse.averageRating > 5) {
      dogHouse.averageRating = 5;
    }
  }

  closeDogList() {
    this.showDogList = 0;
  }

  getSelectedHouse() {
    return this.filteredDoghouses.find(house => house.houseId === this.showDogList);
  }

  setSelectedHouse(id: number) {
    this.showDogList = id;
  }
}
