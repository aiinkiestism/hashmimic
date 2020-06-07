import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareCategoryComponent } from './software-category.component';

describe('SoftwareCategoryComponent', () => {
  let component: SoftwareCategoryComponent;
  let fixture: ComponentFixture<SoftwareCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
