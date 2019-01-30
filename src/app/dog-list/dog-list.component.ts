import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IHouse} from '../model/IHouse';
import {DogService} from '../common/dog.service';
import {IDog} from '../model/IDog';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit, OnChanges {
  title: string;
  filterText: string;
  showPictures: boolean;
  dogs: IDog[];

  @Input() dogHouse: IHouse;
  @Input() closeable: boolean;

  @Output() closed: EventEmitter<boolean>;

  constructor(private service: DogService) {
    this.title = 'All the doggos';
    this.filterText = 'French fries';
    this.showPictures = false;

    this.closed = new EventEmitter<boolean>();

    this.dogs = service.getAllDogs();
  }

  togglePictures() {
    this.showPictures = !this.showPictures;
  }

  onStarRatingActivated(value: number, dog: any): void {
    dog.goodnessRating -= 0.1;
    if (dog.goodnessRating < 0) {
      dog.goodnessRating = 0;
    }
  }

  close(event: MouseEvent) {
    // if the component is contained in a table row i stop its propagation
    // in order not to trigger further events
    event.stopPropagation();
    this.closed.emit(true);
  }

  ngOnInit(): void {
    if (this.dogHouse) {
      this.filterDogsByHouse(this.dogHouse);
    } else {
      this.dogs = this.service.getAllDogs();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dogHouse.currentValue !== changes.dogHouse.previousValue) {
      if (this.dogHouse) {
        this.filterDogsByHouse(this.dogHouse);
      } else {
        this.dogs = this.service.getAllDogs();
      }
    }
  }

  private filterDogsByHouse(dogHouse: IHouse): void {

    this.service.getDogsInHouse(dogHouse.houseId).subscribe(
      dogs => this.dogs = dogs
    );

    // this.dogs = this.service.getDogsInHouse(dogHouse.houseId);
  }
}
