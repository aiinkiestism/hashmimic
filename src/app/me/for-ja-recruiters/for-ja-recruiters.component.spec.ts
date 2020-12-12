import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ForJaRecruitersComponent } from './for-ja-recruiters.component';

describe('ForJaRecruitersComponent', () => {
  let component: ForJaRecruitersComponent;
  let fixture: ComponentFixture<ForJaRecruitersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ForJaRecruitersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForJaRecruitersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
