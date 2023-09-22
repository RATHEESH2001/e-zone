import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomingStoreComponent } from './grooming-store.component';

describe('GroomingStoreComponent', () => {
  let component: GroomingStoreComponent;
  let fixture: ComponentFixture<GroomingStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroomingStoreComponent]
    });
    fixture = TestBed.createComponent(GroomingStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
