import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGrantUsersComponent } from './admin-grant-users.component';

describe('AdminGrantUsersComponent', () => {
  let component: AdminGrantUsersComponent;
  let fixture: ComponentFixture<AdminGrantUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGrantUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGrantUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
