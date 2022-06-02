import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordResetsuccessfullyMessageComponent } from './password-resetsuccessfully-message.component';

describe('PasswordResetsuccessfullyMessageComponent', () => {
  let component: PasswordResetsuccessfullyMessageComponent;
  let fixture: ComponentFixture<PasswordResetsuccessfullyMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordResetsuccessfullyMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResetsuccessfullyMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
