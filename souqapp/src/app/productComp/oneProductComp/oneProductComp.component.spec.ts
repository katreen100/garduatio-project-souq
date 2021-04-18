/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OneProductCompComponent } from './oneProductComp.component';

describe('OneProductCompComponent', () => {
  let component: OneProductCompComponent;
  let fixture: ComponentFixture<OneProductCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneProductCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneProductCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
