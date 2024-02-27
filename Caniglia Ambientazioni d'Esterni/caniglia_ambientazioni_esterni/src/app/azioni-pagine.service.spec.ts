import { TestBed } from '@angular/core/testing';

import { AzioniPagineService } from './azioni-pagine.service';

describe('AzioniPagineService', () => {
  let service: AzioniPagineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzioniPagineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
