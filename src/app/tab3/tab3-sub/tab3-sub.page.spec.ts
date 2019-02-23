import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab3SubPage } from './tab3-sub.page';

describe('Tab3SubPage', () => {
  let component: Tab3SubPage;
  let fixture: ComponentFixture<Tab3SubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab3SubPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab3SubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
