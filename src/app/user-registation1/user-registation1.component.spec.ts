import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistation1Component } from './user-registation1.component';

describe('UserRegistation1Component', () => {
  let component: UserRegistation1Component;
  let fixture: ComponentFixture<UserRegistation1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistation1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
