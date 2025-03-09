import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Local } from '../models/local.model'; // Verifique o caminho correto!

@Injectable({
  providedIn: 'root'
})
export class LocaisService {
  private apiUrl = 'http://localhost:3000/locais'; // Certifique-se de que o JSON Server usa "locais"

  constructor(private http: HttpClient) {}

  getLocais(): Observable<Local[]> {
    return this.http.get<Local[]>(this.apiUrl);
  }
}
