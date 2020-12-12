import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ForJaClientsComponent } from './for-ja-clients.component';

describe('ForJaClientsComponent', () => {
  let component: ForJaClientsComponent;
  let fixture: ComponentFixture<ForJaClientsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ForJaClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForJaClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
