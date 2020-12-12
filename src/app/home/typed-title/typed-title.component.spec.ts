import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TypedTitleComponent } from './typed-title.component';

describe('TypedTitleComponent', () => {
  let component: TypedTitleComponent;
  let fixture: ComponentFixture<TypedTitleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TypedTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypedTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
