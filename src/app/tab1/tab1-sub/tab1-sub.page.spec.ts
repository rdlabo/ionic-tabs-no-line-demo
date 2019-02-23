import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1SubPage } from './tab1-sub.page';

describe('Tab1SubPage', () => {
  let component: Tab1SubPage;
  let fixture: ComponentFixture<Tab1SubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab1SubPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1SubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
