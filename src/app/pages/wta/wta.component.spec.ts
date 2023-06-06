import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WtaComponent } from './wta.component';

describe('WtaComponent', () => {
  let component: WtaComponent;
  let fixture: ComponentFixture<WtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WtaComponent]
    });
    fixture = TestBed.createComponent(WtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
