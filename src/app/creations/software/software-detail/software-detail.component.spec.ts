import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDetailComponent } from './software-detail.component';

describe('SoftwareDetailComponent', () => {
  let component: SoftwareDetailComponent;
  let fixture: ComponentFixture<SoftwareDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
