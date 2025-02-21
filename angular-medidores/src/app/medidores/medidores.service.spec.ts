import { TestBed } from '@angular/core/testing';

import { MedidoresService } from './medidores.service';

describe('MedidoresService', () => {
  let service: MedidoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedidoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Crea el servicio correctamente.', ()=> {
    const medidoresService = TestBed.inject(MedidoresService);
    expect(medidoresService).toBeTruthy()
  })

});
