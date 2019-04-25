import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnotePage } from './viewnote.page';

describe('ViewnotePage', () => {
  let component: ViewnotePage;
  let fixture: ComponentFixture<ViewnotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewnotePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewnotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
