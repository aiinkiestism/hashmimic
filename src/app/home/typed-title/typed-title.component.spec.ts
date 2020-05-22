import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedTitleComponent } from './typed-title.component';

describe('TypedTitleComponent', () => {
  let component: TypedTitleComponent;
  let fixture: ComponentFixture<TypedTitleComponent>;

  beforeEach(async(() => {
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
