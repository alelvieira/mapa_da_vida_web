import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { LocalService } from '../../services/local.service'; // Plural porque é um serviço
import { Local } from '../../models/local.model';
import {HeaderComponent} from '../../components/header/header.component';
import {MapComponent} from '../../components/map/map.component';
import {LocaisListComponent} from '../../components/locais-list/locais-list.component';
import {LocalCardComponent} from '../../components/local-card/local-card.component';
import {NgClass, NgIf} from '@angular/common'; // Singular porque é um modelo de dado
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [ HeaderComponent, MapComponent, LocaisListComponent, LocalCardComponent, NgIf, NgClass ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  locais: Local[] = [];
  exibirLista = true;

  constructor(private locaisService: LocalService) {}

  ngOnInit(): void {
    this.carregarLocais();
  }

  carregarLocais(): void {
    this.locaisService.getLocais().subscribe((data: Local[]) => {
      this.locais = data;
    });
  }

  alternarModo(): void {
    this.exibirLista = !this.exibirLista;
  }

}
