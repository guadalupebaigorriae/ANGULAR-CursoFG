import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './Compartidos/Componentes/menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-medidores';
}
