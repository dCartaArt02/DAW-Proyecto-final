import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonsonateComponent } from './sonsonate.component';

describe('SonsonateComponent', () => {
  let component: SonsonateComponent;
  let fixture: ComponentFixture<SonsonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SonsonateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonsonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
