/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FreeShipppingmodalComponent } from './freeShipppingmodal.component';

describe('FreeShipppingmodalComponent', () => {
  let component: FreeShipppingmodalComponent;
  let fixture: ComponentFixture<FreeShipppingmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeShipppingmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeShipppingmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
