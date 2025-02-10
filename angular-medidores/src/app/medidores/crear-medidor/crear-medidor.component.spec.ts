import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMedidorComponent } from './crear-medidor.component';

describe('CrearMedidorComponent', () => {
  let component: CrearMedidorComponent;
  let fixture: ComponentFixture<CrearMedidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearMedidorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearMedidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
