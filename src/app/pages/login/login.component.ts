import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}


  login() {
    if (this.email === 'admin@mapadavida.com' && this.password === '12345678') {
      alert('Login bem-sucedido!');
      this.router.navigate(['/home']); // Redireciona para a home
    } else {
      alert('E-mail ou senha inválidos');
    }
  }

  logout() {
    this.authService.logout(); // Chama o mesmo logout
  }

}
