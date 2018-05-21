import { TestBed, inject } from '@angular/core/testing';

import { FudService } from './fud.service';

describe('FudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FudService]
    });
  });

  it('should be created', inject([FudService], (service: FudService) => {
    expect(service).toBeTruthy();
  }));
});
