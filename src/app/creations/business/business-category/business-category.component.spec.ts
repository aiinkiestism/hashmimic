import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BusinessCategoryComponent } from './business-category.component';

describe('BusinessCategoryComponent', () => {
  let component: BusinessCategoryComponent;
  let fixture: ComponentFixture<BusinessCategoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
