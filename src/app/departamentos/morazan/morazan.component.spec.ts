import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorazanComponent } from './morazan.component';

describe('MorazanComponent', () => {
  let component: MorazanComponent;
  let fixture: ComponentFixture<MorazanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MorazanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorazanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
