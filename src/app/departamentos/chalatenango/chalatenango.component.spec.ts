import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChalatenangoComponent } from './chalatenango.component';

describe('ChalatenangoComponent', () => {
  let component: ChalatenangoComponent;
  let fixture: ComponentFixture<ChalatenangoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChalatenangoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChalatenangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
