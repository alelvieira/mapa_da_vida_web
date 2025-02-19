import { Component, AfterViewInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var google: any;

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  @Input() locations: { lat: number; lng: number; name: string }[] = [];

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: { lat: -25.4284, lng: -49.2733 },
      zoom: 12
    });

    this.locations.forEach(loc => {
      new google.maps.Marker({
        position: { lat: loc.lat, lng: loc.lng },
        map,
        title: loc.name
      });
    });
  }
}
