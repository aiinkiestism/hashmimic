import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForJaRecruitersComponent } from './for-ja-recruiters.component';

describe('ForJaRecruitersComponent', () => {
  let component: ForJaRecruitersComponent;
  let fixture: ComponentFixture<ForJaRecruitersComponent>;

  beforeEach(async(() => {
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
