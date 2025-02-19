import { Component } from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {PlaceCardComponent} from '../../components/place-card/place-card.component';
import {MapComponent} from '../../components/map/map.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    HeaderComponent,
    PlaceCardComponent,
    MapComponent,
    NgForOf
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
