import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpMeToggleComponent } from './sp-me-toggle.component';

describe('SpMeToggleComponent', () => {
  let component: SpMeToggleComponent;
  let fixture: ComponentFixture<SpMeToggleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpMeToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpMeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
