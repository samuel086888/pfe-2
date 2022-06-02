import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSuccessfullyMessageComponent } from './registration-successfully-message.component';

describe('RegistrationSuccessfullyMessageComponent', () => {
  let component: RegistrationSuccessfullyMessageComponent;
  let fixture: ComponentFixture<RegistrationSuccessfullyMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationSuccessfullyMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationSuccessfullyMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
