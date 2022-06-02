import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginForgetPasswordComponent } from './login-forget-password.component';

describe('LoginForgetPasswordComponent', () => {
  let component: LoginForgetPasswordComponent;
  let fixture: ComponentFixture<LoginForgetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginForgetPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginForgetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
