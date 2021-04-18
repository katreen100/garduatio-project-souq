import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportAndSocialLinksComponent } from './support-and-social-links.component';

describe('SupportAndSocialLinksComponent', () => {
  let component: SupportAndSocialLinksComponent;
  let fixture: ComponentFixture<SupportAndSocialLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportAndSocialLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportAndSocialLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
