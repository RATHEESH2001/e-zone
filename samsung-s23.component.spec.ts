import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsungS23Component } from './samsung-s23.component';

describe('SamsungS23Component', () => {
  let component: SamsungS23Component;
  let fixture: ComponentFixture<SamsungS23Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SamsungS23Component]
    });
    fixture = TestBed.createComponent(SamsungS23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
