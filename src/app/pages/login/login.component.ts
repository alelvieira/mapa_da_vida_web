import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from '../../services/local-storage.service';
import { HttpClient } from '@angular/common/http'; // Importar o HttpClient

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  private router = inject(Router);
  private notificationService = inject(NotificationService);
  private storageService = inject(LocalStorageService);
  private authService = inject(AuthService);
  private httpClient = inject(HttpClient); // Injeção do HttpClient

  email = '';
  password = '';

  isLoggedIn(): boolean {
    return this.storageService.isLoggedIn();
  }

  login() {
    // Busca no JSON Server os dados de login
    this.httpClient.get<any[]>(`http://localhost:3000/usuarios?email=${this.email}&senha=${this.password}`).subscribe({
      next: (usuarios) => {
        if (usuarios.length > 0) {
          // Se encontrar um usuário correspondente
          this.storageService.setItem('user', { email: this.email });
          this.notificationService.showMessage('✅ Login bem-sucedido!');
          this.router.navigate(['/home']);
        } else {
          // Se não encontrar, mensagem de erro
          this.notificationService.showMessage('❌ E-mail ou senha inválidos!', 4000);
        }
      },
      error: (error) => {
        this.notificationService.showMessage('⚠️ Erro ao fazer login!');
        console.error(error);
      }
    });
  }

  logout() {
    this.storageService.removeItem('user');
    this.notificationService.showMessage('👋 Você saiu da conta.');
    this.router.navigate(['/login']);
  }
}
