import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeCreationsComponent } from './home-creations.component';

describe('HomeCreationsComponent', () => {
  let component: HomeCreationsComponent;
  let fixture: ComponentFixture<HomeCreationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCreationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCreationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
