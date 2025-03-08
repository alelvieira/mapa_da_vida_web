import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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
  private http = inject(HttpClient); // ✅ Correto para Standalone Components
  private router = inject(Router);

  BASE_URL = "http://localhost:3000/usuarios/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  listarTodos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.BASE_URL, this.httpOptions);
  }

  buscarPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.BASE_URL}${id}`, this.httpOptions);
  }

  inserir(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.BASE_URL, JSON.stringify(usuario), this.httpOptions);
  }

  remover(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}${id}`, this.httpOptions);
  }

  alterar(usuario: Usuario): Observable<Usuario> {
    if (!usuario.id) {
      throw new Error("Usuário sem ID, não pode ser alterado.");
    }
    return this.http.put<Usuario>(`${this.BASE_URL}${usuario.id}`, JSON.stringify(usuario), this.httpOptions);
  }

  logout(): void {
    localStorage.removeItem('user');
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
