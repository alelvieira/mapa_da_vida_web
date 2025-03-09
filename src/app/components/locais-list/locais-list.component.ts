import {Component, Input, ViewEncapsulation} from '@angular/core';
import { Local } from '../../models/local.model';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-locais-list',
  templateUrl: './locais-list.component.html',
  imports: [ NgForOf ],
  styleUrls: ['./locais-list.component.css']
})
export class LocaisListComponent {
  @Input() locais: Local[] = [];  // Certifique-se de que 'locais' é um @Input() corretamente declarado
}
