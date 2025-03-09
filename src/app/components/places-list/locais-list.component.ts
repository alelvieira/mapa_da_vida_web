import { Component, Input } from '@angular/core';
import { Local } from '../../models/local.model';
import {NgForOf} from '@angular/common'; // Verifique se o caminho está correto!

@Component({
  selector: 'app-locais-list',
  templateUrl: './locais-list.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./locais-list.component.css']
})
export class LocaisListComponent {
  @Input() locals: Local[] = []; // Certifique-se de que 'Local' está correto
}
