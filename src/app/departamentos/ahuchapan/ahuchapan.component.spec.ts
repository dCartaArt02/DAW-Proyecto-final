import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhuchapanComponent } from './ahuchapan.component';

describe('AhuchapanComponent', () => {
  let component: AhuchapanComponent;
  let fixture: ComponentFixture<AhuchapanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AhuchapanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhuchapanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
