import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { businessList } from './business-list.component';

describe('BusinessListComponentComponent', () => {
  let component: businessList;
  let fixture: ComponentFixture<businessList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ businessList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(businessList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
