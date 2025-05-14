import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuscatlanComponent } from './cuscatlan.component';

describe('CuscatlanComponent', () => {
  let component: CuscatlanComponent;
  let fixture: ComponentFixture<CuscatlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuscatlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuscatlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
