import { Component, inject } from '@angular/core';
import { NotificationService } from './services/notification.service';
import {NotificationComponent} from './components/notification/notification.component';
import {Router, RouterOutlet} from '@angular/router';
import {LocalStorageService} from './services/local-storage.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NotificationComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Mapa da Vida';

  notificationService = inject(NotificationService);
  private storageService = inject(LocalStorageService);
  private router = inject(Router);

  constructor() {
    if (this.storageService.isLoggedIn()) {
      this.router.navigate(['/home']); // Redireciona para a home se já estiver logado
    }
  }

  // Simulando um login bem-sucedido
  loginSuccess() {
    this.notificationService.showMessage('✅ Login realizado com sucesso!');
  }

  loginError() {
    this.notificationService.showMessage('❌ Erro ao fazer login!', 5000);
  }
}
