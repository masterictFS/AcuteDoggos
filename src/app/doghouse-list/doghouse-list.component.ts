import { Component } from '@angular/core';
import {HouseService} from '../common/house.service';
import {IHouse} from '../model/IHouse';

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

  constructor(private houseService: HouseService) {
    this.title = 'The Doggo Neighborhood™';
    // this._filterText = 'Hamburgers';
    this.showDescription = false;

    houseService.getAllHouses().subscribe(houses => {
      this.doghouses = houses;
      this.filteredDoghouses = this.doghouses.map(house => house);
    });

    // TODO filter could still be broken
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

  getSelectedHouse(): IHouse {
    return this.filteredDoghouses.find(house => house.houseId === this.showDogList);
  }

  setSelectedHouse(id: number) {
    this.showDogList = id;
  }
}
