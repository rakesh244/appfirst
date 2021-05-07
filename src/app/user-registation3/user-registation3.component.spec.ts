import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistation3Component } from './user-registation3.component';

describe('UserRegistation3Component', () => {
  let component: UserRegistation3Component;
  let fixture: ComponentFixture<UserRegistation3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistation3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistation3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
