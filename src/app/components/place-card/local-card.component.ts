import { Component, Input } from '@angular/core';
import { Local } from '../../models/local.model';

@Component({
  selector: 'app-local-card',
  templateUrl: './local-card.component.html',
  styleUrls: ['./local-card.component.css']
})
export class LocalCardComponent {
  @Input() locais: Local[] = []; // Recebe a lista de lugares
}
