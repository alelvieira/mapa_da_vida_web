import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('user');  // Remove o usuário salvo
    sessionStorage.clear(); // Limpa toda a sessão

    this.router.navigate(['/login']); // Redireciona para a página de login
  }
}
