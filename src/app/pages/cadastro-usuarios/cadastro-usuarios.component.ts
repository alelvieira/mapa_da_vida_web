import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { HttpClient } from '@angular/common/http'; // Importar o HttpClient
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-cadastro-usuarios',
  imports: [
    FormsModule,
    CommonModule,
    HeaderComponent
  ],
  templateUrl: './cadastro-usuarios.component.html',
  styleUrl: './cadastro-usuarios.component.css'
})
export class CadastroUsuariosComponent {
  private router = inject(Router);
  private notificationService = inject(NotificationService);
  private httpClient = inject(HttpClient); // Injeção do HttpClient

  tipoUsuario: string = 'comum';
  nome: string = '';
  email: string = '';
  cep: string = '';
  idade: number | null = null;
  senha: string = '';

  // Campos exclusivos para profissionais de saúde
  registro: string = '';
  conselho: string = '';
  identidadeFoto: File | null = null;

  // Método para capturar a foto enviada
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.identidadeFoto = file;
      this.notificationService.showMessage(`📷 ${file.name} carregado com sucesso!`);
    }
  }

  onTipoUsuarioChange(novoValor: string) {
    this.tipoUsuario = novoValor;

    if (this.tipoUsuario === 'comum') {
      this.registro = '';
      this.conselho = '';
      this.identidadeFoto = null;
    }
  }

  // Validação antes do cadastro
  validarCampos(): boolean {
    if (!this.nome || !this.email || !this.cep || !this.idade || !this.senha) {
      this.notificationService.showMessage('⚠️ Preencha todos os campos obrigatórios!');
      return false;
    }

    if (this.tipoUsuario === 'profissional' && (!this.registro || !this.conselho || !this.identidadeFoto)) {
      this.notificationService.showMessage('⚠️ Profissionais de saúde precisam preencher todos os campos e enviar uma foto!');
      return false;
    }

    return true;
  }

  // Método de cadastro
  cadastrar() {
    if (!this.validarCampos()) return;

    const dadosCadastro = {
      tipo: this.tipoUsuario,
      nome: this.nome,
      email: this.email,
      cep: this.cep,
      idade: this.idade,
      senha: this.senha,
      ...(this.tipoUsuario === 'profissional' && {
        registro: this.registro,
        conselho: this.conselho,
        identidadeFoto: this.identidadeFoto?.name || ''
      })
    };

    // Envia os dados para o JSON Server via POST
    this.httpClient.post('http://localhost:3000/usuarios', dadosCadastro).subscribe({
      next: (response) => {
        this.notificationService.showMessage('✅ Cadastro realizado com sucesso!');
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.notificationService.showMessage('⚠️ Erro ao realizar o cadastro!');
        console.error(error);
      }
    });
  }
}
