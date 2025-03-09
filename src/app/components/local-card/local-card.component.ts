import { Component, Input } from '@angular/core';
import { Local } from '../../models/local.model';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-local-card',
  templateUrl: './local-card.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./local-card.component.css']
})
export class LocalCardComponent {
  @Input() locais: Local[] = []; // Recebe a lista de lugares
}
