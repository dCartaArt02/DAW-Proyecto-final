import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantaanaComponent } from './santaana.component';

describe('SantaanaComponent', () => {
  let component: SantaanaComponent;
  let fixture: ComponentFixture<SantaanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SantaanaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SantaanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
