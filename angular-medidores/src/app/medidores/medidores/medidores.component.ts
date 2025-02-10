import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-medidores',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './medidores.component.html',
  styleUrl: './medidores.component.css'
})
export class MedidoresComponent {

}
