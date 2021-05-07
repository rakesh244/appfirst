import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistation2Component } from './user-registation2.component';

describe('UserRegistation2Component', () => {
  let component: UserRegistation2Component;
  let fixture: ComponentFixture<UserRegistation2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistation2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
