import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable, switchMap} from 'rxjs';
import { Local } from '../models/local.model'; // Verifique o caminho correto!

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  private apiUrl = 'http://localhost:3000/locais'; // Certifique-se de que o JSON Server usa "locais"
  private viaCepUrl = 'https://viacep.com.br/ws'; // API ViaCEP
  private openCageUrl = 'https://api.opencagedata.com/geocode/v1/json'; // OpenCage
  private openCageKey = 'dc6960ff82a34c9982f9ba04d6cbb0f1'; // 🔑 Substitua pela sua API Key do OpenCage

  constructor(private http: HttpClient) {}

  getLocais(): Observable<Local[]> {
    return this.http.get<Local[]>(this.apiUrl);
  }

  // Buscar endereço pelo CEP
  buscarEndereco(cep: string): Observable<any> {
    return this.http.get<any>(`${this.viaCepUrl}/${cep}/json`);
  }

  // Buscar lat/lng pelo endereço usando OpenCage
  buscarCoordenadas(endereco: string): Observable<any> {
    return this.http.get<any>(`${this.openCageUrl}?q=${encodeURIComponent(endereco)}&key=${this.openCageKey}`);
  }

  // Adicionar um novo local
  adicionarLocal(local: Local): Observable<Local> {
    return this.http.post<Local>(this.apiUrl, local);
  }

  // Fluxo para preencher automaticamente endereço e coordenadas com base no CEP
  processarCEP(cep: string): Observable<{ endereco: string, lat: number, lng: number }> {
    return this.buscarEndereco(cep).pipe(
      switchMap(enderecoData => {
        const enderecoFormatado = `${enderecoData.logradouro}, ${enderecoData.bairro}, ${enderecoData.localidade} - ${enderecoData.uf}`;
        return this.buscarCoordenadas(enderecoFormatado).pipe(
          map(coordData => {
            const { lat, lng } = coordData.results[0].geometry;
            return { endereco: enderecoFormatado, lat, lng };
          })
        );
      })
    );
  }
}
