import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PawRatingComponent } from './paw-rating.component';

describe('PawRatingComponent', () => {
  let component: PawRatingComponent;
  let fixture: ComponentFixture<PawRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PawRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PawRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
