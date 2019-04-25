import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritenotePage } from './writenote.page';

describe('WritenotePage', () => {
  let component: WritenotePage;
  let fixture: ComponentFixture<WritenotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritenotePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritenotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
