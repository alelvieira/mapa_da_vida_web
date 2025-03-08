import { Component, Input } from '@angular/core';
import { Place } from '../../services/place.service';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.css']
})
export class PlaceCardComponent {
  @Input() place!: Place;
}
