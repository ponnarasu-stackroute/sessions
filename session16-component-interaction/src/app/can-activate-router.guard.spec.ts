import { TestBed, async, inject } from '@angular/core/testing';

import { CanActivateRouterGuard } from './can-activate-router.guard';

describe('CanActivateRouterGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateRouterGuard]
    });
  });

  it('should ...', inject([CanActivateRouterGuard], (guard: CanActivateRouterGuard) => {
    expect(guard).toBeTruthy();
  }));
});
