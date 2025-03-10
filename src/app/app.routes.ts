import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import {CadastroUsuariosComponent} from './pages/cadastro-usuarios/cadastro-usuarios.component';
import { ConsultarUsuariosComponent } from './pages/consultar-usuarios/consultar-usuarios.component';
import { CadastrarLocaisComponent } from './pages/cadastrar-locais/cadastrar-locais.component'; //

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Página inicial é o Login
  { path: 'home', component: HomeComponent }, // Página principal após login
  { path: 'cadastrar-usuarios', component: CadastroUsuariosComponent },
  { path: 'consultar-usuarios', component: ConsultarUsuariosComponent },
  { path: 'cadastrar-locais', component: CadastrarLocaisComponent },
  { path: '**', redirectTo: '' } // Qualquer rota inválida redireciona para login

];
