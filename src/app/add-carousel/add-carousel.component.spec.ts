import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarouselComponent } from './add-carousel.component';

describe('AddCarouselComponent', () => {
  let component: AddCarouselComponent;
  let fixture: ComponentFixture<AddCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
