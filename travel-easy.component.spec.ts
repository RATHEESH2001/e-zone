import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelEasyComponent } from './travel-easy.component';

describe('TravelEasyComponent', () => {
  let component: TravelEasyComponent;
  let fixture: ComponentFixture<TravelEasyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelEasyComponent]
    });
    fixture = TestBed.createComponent(TravelEasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
