import { Routes } from '@angular/router';
import { MedidoresComponent } from './medidores/medidores/medidores.component';
import { CrearMedidorComponent } from './medidores/crear-medidor/crear-medidor.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FiltroMedidoresComponent } from './medidores/filtro-medidores/filtro-medidores.component';
import { EditarMedidorComponent } from './medidores/editar-medidor/editar-medidor.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
       {path: 'medidores/medidores', component: MedidoresComponent},
       {path: 'medidores/crear-medidor', component: CrearMedidorComponent},
       {path: 'medidores/filtro-medidores', component: FiltroMedidoresComponent},
       {path: 'medidores/editar/:numeroMedidor', component: EditarMedidorComponent}
];
