import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMyAccountComponent } from './footer-my-account.component';

describe('FooterMyAccountComponent', () => {
  let component: FooterMyAccountComponent;
  let fixture: ComponentFixture<FooterMyAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterMyAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
