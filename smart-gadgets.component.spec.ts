import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartGadgetsComponent } from './smart-gadgets.component';

describe('SmartGadgetsComponent', () => {
  let component: SmartGadgetsComponent;
  let fixture: ComponentFixture<SmartGadgetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartGadgetsComponent]
    });
    fixture = TestBed.createComponent(SmartGadgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
