import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalligraphyComponent } from './calligraphy.component';

describe('CalligraphyComponent', () => {
  let component: CalligraphyComponent;
  let fixture: ComponentFixture<CalligraphyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalligraphyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalligraphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
