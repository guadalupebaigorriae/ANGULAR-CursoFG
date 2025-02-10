import { Routes } from '@angular/router';
import { MedidoresComponent } from './medidores/medidores/medidores.component';
import { CrearMedidorComponent } from './medidores/crear-medidor/crear-medidor.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
       {path: 'medidores/medidores', component: MedidoresComponent},
       {path: 'medidores/crear-medidor', component: CrearMedidorComponent}

];
