import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PlaceCardComponent } from '../place-card/place-card.component';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-places-list',
  standalone: true,
  imports: [CommonModule, PlaceCardComponent, MapComponent],
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {
  private http = inject(HttpClient);

  places: { name: string; category: string; address: string; description: string; image: string; lat: number; lng: number }[] = [];

  ngOnInit(): void {
    this.http.get<typeof this.places>('http://localhost:3000/locations')
      .subscribe(data => this.places = data);
  }
}
