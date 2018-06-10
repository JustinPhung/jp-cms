import { TestBed, inject } from '@angular/core/testing';

import { JpAuthService } from './jp-auth.service';

describe('JpAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JpAuthService]
    });
  });

  it('should be created', inject([JpAuthService], (service: JpAuthService) => {
    expect(service).toBeTruthy();
  }));
});
