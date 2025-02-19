import { Component, Input, AfterViewInit } from '@angular/core';
import { Place } from '../../models/place.model'; // ✅ Importação do modelo

@Component({
  selector: 'app-map',
  standalone: true,
  template: '<div id="map"></div>',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  @Input() locations: Place[] = []; // ✅ Aplicação do tipo Place[]

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      // Usar o Leaflet somente no lado do cliente
      import('leaflet').then((L) => {
        const map = L.map('map').setView([-25.4296, -49.2713], 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

        // Ícones personalizados para diferentes tipos de locais
        const icons: Record<Place['type'], L.Icon> = {
          Parque: L.icon({ iconUrl: 'assets/icons/park.png', iconSize: [32, 32] }),
          Academia: L.icon({ iconUrl: 'assets/icons/gym.png', iconSize: [32, 32] }),
          'Academia ao ar livre': L.icon({ iconUrl: 'assets/icons/square.png', iconSize: [32, 32] }),
        };

        this.locations.forEach(loc => {
          const iconType = icons[loc.type] || icons['Parque']; // Ícone padrão
          L.marker([loc.lat, loc.lng], { icon: iconType }).addTo(map)
            .bindPopup(`<b>${loc.name}</b><br>${loc.category}<br>${loc.address}`);
        });
      }).catch(error => {
        console.error('Erro ao carregar o Leaflet:', error);
      });
    }
  }
}
