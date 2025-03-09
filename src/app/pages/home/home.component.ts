import { Component, OnInit } from '@angular/core';
import { LocaisService } from '../../services/local.service'; // Plural porque é um serviço
import { Local } from '../../models/local.model'; // Singular porque é um modelo de dado

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  locais: Local[] = [];

  constructor(private locaisService: LocaisService) {}

  ngOnInit(): void {
    this.carregarLocais();
  }

  carregarLocais(): void {
    this.locaisService.getLocais().subscribe((data: Local[]) => {
      this.locais = data;
    });
  }
}
