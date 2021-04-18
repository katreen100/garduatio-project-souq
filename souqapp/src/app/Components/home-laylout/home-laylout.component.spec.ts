import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLayloutComponent } from './home-laylout.component';

describe('HomeLayloutComponent', () => {
  let component: HomeLayloutComponent;
  let fixture: ComponentFixture<HomeLayloutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLayloutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLayloutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
