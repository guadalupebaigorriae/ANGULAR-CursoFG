import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidoresComponent } from './medidores.component';
import { HttpResponse } from '@angular/common/http';
import { MedidoresService } from '../medidores.service';

describe('MedidoresComponent', () => {
  let component: MedidoresComponent;
  let fixture: ComponentFixture<MedidoresComponent>;
  // let mockIServicioCRUD: jasmine.SpyObj<IServicioCRUD<object, object>>;
  // )  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedidoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('Debe mostrar tabla cuando existan registros', () => {
  //   const fixture = TestBed.createComponent(MedidoresComponent);
  //   const componente = fixture.componentInstance;
  //   const respuesta = new HttpResponse<object[]>({body: [{}]})

  // })
});
