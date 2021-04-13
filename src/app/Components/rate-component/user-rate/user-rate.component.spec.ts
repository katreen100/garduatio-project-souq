import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRateComponent } from './user-rate.component';

describe('UserRateComponent', () => {
  let component: UserRateComponent;
  let fixture: ComponentFixture<UserRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
