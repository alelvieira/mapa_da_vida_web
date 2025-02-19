import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Página inicial é o Login
  { path: 'home', component: HomeComponent }, // Página principal após login
  { path: '**', redirectTo: '' } // Qualquer rota inválida redireciona para login
];
