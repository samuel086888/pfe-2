import { TestBed } from '@angular/core/testing';

import { EmailGuardService } from './email-guard.service';

describe('EmailGuardService', () => {
  let service: EmailGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
