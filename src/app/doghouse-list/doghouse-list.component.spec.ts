import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoghouseListComponent } from './doghouse-list.component';

describe('DoghouseListComponent', () => {
  let component: DoghouseListComponent;
  let fixture: ComponentFixture<DoghouseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoghouseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoghouseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
