import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { AuthService } from '../../services/auth.service';
import {FormsModule} from '@angular/forms';
import {LocalStorageService} from '../../services/local-storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [
    FormsModule, CommonModule
  ],
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  private router = inject(Router);
  private notificationService = inject(NotificationService);
  private storageService = inject(LocalStorageService);
  private authService = inject(AuthService);

  email = '';
  password = '';

  isLoggedIn(): boolean {
    return this.storageService.isLoggedIn();
  }

  login() {
    if (this.email === 'admin@mapadavida.com' && this.password === '12345678') {
      this.storageService.setItem('user', { email: this.email });
      this.notificationService.showMessage('✅ Login bem-sucedido!');
      this.router.navigate(['/home']);
    } else {
      this.notificationService.showMessage('❌ E-mail ou senha inválidos!', 4000);
    }
  }

  logout() {
    this.storageService.removeItem('user');
    this.notificationService.showMessage('👋 Você saiu da conta.');
    this.router.navigate(['/login']);
  }

}
