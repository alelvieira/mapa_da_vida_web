import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.css']
})
export class PlaceCardComponent {
  @Input() place: any; // Ou o tipo 'Place', dependendo de como você declarou o tipo
}
