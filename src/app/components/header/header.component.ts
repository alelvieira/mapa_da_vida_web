import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header', // ✅ Tem que ser "app-header"
  templateUrl: './header.component.html',
  imports: [
    NgOptimizedImage, RouterModule, CommonModule
  ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router, private authService: AuthService) {}

  logout() {
    this.authService.logout(); // Chama o logout do serviço
  }

}
