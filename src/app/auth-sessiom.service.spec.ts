import { TestBed, inject } from '@angular/core/testing';

import { AuthSessiomService } from './auth-sessiom.service';

describe('AuthSessiomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthSessiomService]
    });
  });

  it('should be created', inject([AuthSessiomService], (service: AuthSessiomService) => {
    expect(service).toBeTruthy();
  }));
});
