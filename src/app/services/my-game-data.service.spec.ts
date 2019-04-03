import { TestBed } from '@angular/core/testing';

import { MyGameDataService } from './my-game-data.service';

describe('MyGameDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyGameDataService = TestBed.get(MyGameDataService);
    expect(service).toBeTruthy();
  });
});
