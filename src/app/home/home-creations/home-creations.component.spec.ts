import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCreationsComponent } from './home-creations.component';

describe('HomeCreationsComponent', () => {
  let component: HomeCreationsComponent;
  let fixture: ComponentFixture<HomeCreationsComponent>;

  beforeEach(async(() => {
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
