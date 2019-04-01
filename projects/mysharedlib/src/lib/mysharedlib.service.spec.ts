import { TestBed } from '@angular/core/testing';

import { MysharedlibService } from './mysharedlib.service';

describe('MysharedlibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MysharedlibService = TestBed.get(MysharedlibService);
    expect(service).toBeTruthy();
  });
});
