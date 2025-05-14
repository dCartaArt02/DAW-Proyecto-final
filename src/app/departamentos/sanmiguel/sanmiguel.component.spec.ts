import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanmiguelComponent } from './sanmiguel.component';

describe('SanmiguelComponent', () => {
  let component: SanmiguelComponent;
  let fixture: ComponentFixture<SanmiguelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SanmiguelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanmiguelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
