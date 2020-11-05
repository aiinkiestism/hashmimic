import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForClientsComponent } from './for-clients.component';

describe('ForClientsComponent', () => {
  let component: ForClientsComponent;
  let fixture: ComponentFixture<ForClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
