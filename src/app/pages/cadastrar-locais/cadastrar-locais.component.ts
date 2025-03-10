import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LocalService } from '../../services/local.service';
import { RouterModule } from '@angular/router';
import {HeaderComponent} from '../../components/header/header.component';

@Component({
  selector: 'app-cadastrar-locais',
  standalone: true, // ✅ Torna o componente independente
  imports: [CommonModule, ReactiveFormsModule, RouterModule, HeaderComponent], // ✅ Importa os módulos necessários
  templateUrl: './cadastrar-locais.component.html',
  styleUrls: ['./cadastrar-locais.component.css']
})
export class CadastrarLocaisComponent {
  localForm: FormGroup;
  mensagem: string = '';

  constructor(private fb: FormBuilder, private locaisService: LocalService) {
    this.localForm = this.fb.group({
      nome: ['', Validators.required],
      categoria: ['', Validators.required],
      cep: ['', [Validators.required, Validators.pattern(/^\d{5}-?\d{3}$/)]],
      endereco: [{ value: '', disabled: true }, Validators.required],
      descricao: ['', Validators.required],
      imagem: ['', Validators.required],
      lat: [{ value: '', disabled: true }],
      lng: [{ value: '', disabled: true }]
    });
  }

  buscarEndereco() {
    const cep = this.localForm.get('cep')?.value;
    if (cep) {
      this.locaisService.processarCEP(cep).subscribe(data => {
        this.localForm.patchValue({
          endereco: data.endereco,
          lat: data.lat,
          lng: data.lng
        });
      });
    }
  }

  salvarLocal() {
    if (this.localForm.valid) {
      this.locaisService.adicionarLocal(this.localForm.getRawValue()).subscribe(() => {
        this.mensagem = 'Local cadastrado com sucesso!';
        this.localForm.reset();
      });
    }
  }
}
