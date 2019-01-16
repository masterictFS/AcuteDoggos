import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {

  numberOfDoghouses: number;
  numberOfDogs: number;

  constructor() {
    this.numberOfDoghouses = 579;
    this.numberOfDogs = 1337;
  }

}
