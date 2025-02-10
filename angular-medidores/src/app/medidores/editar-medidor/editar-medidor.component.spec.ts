import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMedidorComponent } from './editar-medidor.component';

describe('EditarMedidorComponent', () => {
  let component: EditarMedidorComponent;
  let fixture: ComponentFixture<EditarMedidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarMedidorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarMedidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
