import { Component, AfterViewInit, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

declare var google: any; // Declara a API do Google Maps

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private http = inject(HttpClient);

  @Input() locations: any[] = [];

  ngAfterViewInit(): void {
    this.loadLocations();
  }

  loadLocations(): void {
    this.http.get<any[]>('http://localhost:3000/locais')
      .subscribe(locations => {
        this.locations = locations;
        this.initMap();
      }, error => {
        console.error('Erro ao carregar locais:', error);
      });
  }

  private initMap(): void {
    const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: { lat: -25.4284, lng: -49.2733 }, // Posição central em Curitiba
      zoom: 12
    });

    this.locations.forEach(location => {
      const marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map,
        title: location.nome
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `<h3>${location.nome}</h3>
                  <p><strong>Categoria:</strong> ${location.categoria}</p>
                  <p>${location.descricao}</p>`
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    });
  }
}
