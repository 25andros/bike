import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearInchComponent } from './gear-inch.component';

describe('GearInchComponent', () => {
  let component: GearInchComponent;
  let fixture: ComponentFixture<GearInchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GearInchComponent]
    });
    fixture = TestBed.createComponent(GearInchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
