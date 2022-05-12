/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TokenInterceeptorService } from './token-interceeptor.service';

describe('Service: TokenInterceeptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenInterceeptorService]
    });
  });

  it('should ...', inject([TokenInterceeptorService], (service: TokenInterceeptorService) => {
    expect(service).toBeTruthy();
  }));
});
