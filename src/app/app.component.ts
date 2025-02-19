import { CommonModule } from '@angular/common';  // Importação do CommonModule
import { Component } from '@angular/core';
import { MapComponent } from './components/map/map.component'; // Supondo que o MapComponent seja um componente filho
import { PlaceCardComponent } from './components/place-card/place-card.component';
import {HeaderComponent} from './components/header/header.component';
import {RouterOutlet} from '@angular/router'; // Componente filho onde o *ngFor é utilizado

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MapComponent, PlaceCardComponent, HeaderComponent, RouterOutlet],  // Adicionando CommonModule aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
places = [
    {
      name: 'Parque Nacional',
      category: 'Parque',
      address: 'Rua XYZ',
      description: 'Lugar perfeito para caminhadas.',
      lat: 45.0,
      lng: -75.0,
      type: 'parque'  // A propriedade 'type' é necessária
    },
    // Outros objetos
  ];
}

