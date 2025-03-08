import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Agora usamos o AuthService
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditarUsuarioComponent } from '../../modal/editar-usuario/editar-usuario.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-consultar-usuarios',
  standalone: true,
  templateUrl: './consultar-usuarios.component.html',
  styleUrls: ['./consultar-usuarios.component.css'],
  imports: [CommonModule, FormsModule, MatDialogModule, HeaderComponent]
})
export class ConsultarUsuariosComponent {
  private authService = inject(AuthService); // Agora usamos AuthService
  private dialog = inject(MatDialog);

  usuarios: any[] = [];
  temProfissional: boolean = false;

  ngOnInit() {
    this.carregarUsuarios();
  }

  carregarUsuarios() {
    this.authService.listarTodos().subscribe(
      (dados) => {
        this.usuarios = dados;
        this.temProfissional = this.usuarios.some(u => u.tipo === 'profissional');
      },
      (erro) => {
        console.error('Erro ao carregar usuários:', erro);
      }
    );
  }

  editarUsuario(usuario: any) {
    const dialogRef = this.dialog.open(EditarUsuarioComponent, {
      width: '400px',
      data: { ...usuario }
    });

    dialogRef.afterClosed().subscribe((usuarioEditado) => {
      if (usuarioEditado) {
        this.atualizarUsuario(usuarioEditado);
      }
    });
  }

  atualizarUsuario(usuarioEditado: any) {
    this.authService.alterar(usuarioEditado).subscribe(
      () => {
        this.carregarUsuarios();
      },
      (erro) => {
        console.error('Erro ao atualizar usuário:', erro);
      }
    );
  }
}
