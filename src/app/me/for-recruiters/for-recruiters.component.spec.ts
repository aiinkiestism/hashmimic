import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForRecruitersComponent } from './for-recruiters.component';

describe('ForRecruitersComponent', () => {
  let component: ForRecruitersComponent;
  let fixture: ComponentFixture<ForRecruitersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForRecruitersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForRecruitersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
