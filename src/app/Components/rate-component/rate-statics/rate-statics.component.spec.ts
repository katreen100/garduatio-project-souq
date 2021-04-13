import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateStaticsComponent } from './rate-statics.component';

describe('RateStaticsComponent', () => {
  let component: RateStaticsComponent;
  let fixture: ComponentFixture<RateStaticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateStaticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateStaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
