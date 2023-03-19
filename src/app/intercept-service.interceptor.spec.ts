import { TestBed } from '@angular/core/testing';

import { InterceptServiceInterceptor } from './intercept-service.interceptor';

describe('InterceptServiceInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptServiceInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterceptServiceInterceptor = TestBed.inject(InterceptServiceInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
