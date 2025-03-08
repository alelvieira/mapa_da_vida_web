import { Component, OnInit } from '@angular/core';
import { PlaceService, Place } from '../../services/place.service';
import {HeaderComponent} from '../../components/header/header.component';
import {MapComponent} from '../../components/map/map.component';
import {PlacesListComponent} from '../../components/places-list/places-list.component';
import {PlaceCardComponent} from '../../components/place-card/place-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    HeaderComponent,
    MapComponent,
    PlacesListComponent,
    PlaceCardComponent
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  exibirLista = true;
  places: Place[] = []; // Armazena os imóveis

  constructor(private placeService: PlaceService) {}

  ngOnInit() {
    this.carregarImoveis();
  }

  carregarImoveis() {
    this.placeService.getPlaces().subscribe({
      next: (data) => {
        this.places = data;
      },
      error: (error) => {
        console.error('Erro ao buscar imóveis:', error);
      }
    });
  }

  alternarModo() {
    this.exibirLista = !this.exibirLista;
  }
}
