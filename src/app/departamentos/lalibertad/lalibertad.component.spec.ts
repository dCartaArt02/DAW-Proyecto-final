import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LalibertadComponent } from './lalibertad.component';

describe('LalibertadComponent', () => {
  let component: LalibertadComponent;
  let fixture: ComponentFixture<LalibertadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LalibertadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LalibertadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
