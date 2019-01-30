import {Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  template: `
    <div [style.width.px]="width" [style.maxWidth.px]="width" [title]="rating"
         class="crop" (click)="onClick()">
      <div [style.width.px]="maxWidth">
      <span class="fa fa-paw"></span>
      <span class="fa fa-paw"></span>
      <span class="fa fa-paw"></span>
      <span class="fa fa-paw"></span>
      <span class="fa fa-paw"></span>
    </div>
    </div>
  `,
  styles: [
    `
      .crop {
        overflow: hidden;
      }
    `
  ]
})
export class PawRatingComponent implements OnInit, OnChanges {
  static starWidth = 13;
  static maxStars = 5;

  maxWidth = PawRatingComponent.starWidth * PawRatingComponent.maxStars;
  width: number;

  @Input() rating: number;

  @Output() activated: EventEmitter<number>;

  constructor() {
    this.activated = new EventEmitter<number>();
  }

  ngOnInit() {
    this.computeWidth();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.computeWidth();
  }

  onClick() {
    this.activated.emit(this.rating);
  }

  private computeWidth(): number {
    return this.width = this.maxWidth * this.rating / PawRatingComponent.maxStars;
  }
}
