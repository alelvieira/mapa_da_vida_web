import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario {
  id?: number;
  tipo: string;
  nome: string;
  email: string;
  senha: string;
  registro?: string;
  conselho?: string;
  identidadeFoto?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router, private httpClient: HttpClient) {}

  BASE_URL = "http://localhost:3000/usuarios/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  listarTodos(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.BASE_URL, this.httpOptions);
  }

  buscarPorId(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.BASE_URL}${id}`, this.httpOptions);
  }

  inserir(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.BASE_URL, JSON.stringify(usuario), this.httpOptions);
  }

  remover(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.BASE_URL}${id}`, this.httpOptions);
  }

  alterar(usuario: Usuario): Observable<Usuario> {
    if (!usuario.id) {
      console.error("Usuário sem ID, não pode ser alterado.");
      throw new Error("Usuário sem ID, não pode ser alterado.");
    }

    return this.httpClient.put<Usuario>(`${this.BASE_URL}${usuario.id}`, JSON.stringify(usuario), this.httpOptions);
  }

  logout() {
    localStorage.removeItem('user');
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
