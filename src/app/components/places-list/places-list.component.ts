import { Component, Input } from '@angular/core';
import { Place } from '../../services/place.service';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent {
  @Input() places: Place[] = [];
}
