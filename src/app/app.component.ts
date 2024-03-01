import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VeiculosListComponent } from './veiculos-list/veiculos-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,VeiculosListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'veiculos';
}
