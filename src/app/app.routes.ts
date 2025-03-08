import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import {CadastroUsuariosComponent} from './pages/cadastro-usuarios/cadastro-usuarios.component';
import { ConsultarUsuariosComponent } from './pages/consultar-usuarios/consultar-usuarios.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Página inicial é o Login
  { path: 'home', component: HomeComponent }, // Página principal após login
  { path: 'cadastro-usuarios', component: CadastroUsuariosComponent },
  { path: 'consultar-usuarios', component: ConsultarUsuariosComponent },
  { path: '**', redirectTo: '' } // Qualquer rota inválida redireciona para login

];
