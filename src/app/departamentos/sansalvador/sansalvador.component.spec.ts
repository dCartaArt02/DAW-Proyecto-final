import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SansalvadorComponent } from './sansalvador.component';

describe('SansalvadorComponent', () => {
  let component: SansalvadorComponent;
  let fixture: ComponentFixture<SansalvadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SansalvadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SansalvadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
