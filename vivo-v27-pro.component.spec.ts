import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VivoV27ProComponent } from './vivo-v27-pro.component';

describe('VivoV27ProComponent', () => {
  let component: VivoV27ProComponent;
  let fixture: ComponentFixture<VivoV27ProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VivoV27ProComponent]
    });
    fixture = TestBed.createComponent(VivoV27ProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
