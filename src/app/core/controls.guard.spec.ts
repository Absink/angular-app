import { TestBed } from '@angular/core/testing';

import { ControlsGuard } from './controls.guard';

describe('ControlsGuard', () => {
  let guard: ControlsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ControlsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
