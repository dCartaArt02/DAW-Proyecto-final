import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanvicenteComponent } from './sanvicente.component';

describe('SanvicenteComponent', () => {
  let component: SanvicenteComponent;
  let fixture: ComponentFixture<SanvicenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SanvicenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanvicenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
