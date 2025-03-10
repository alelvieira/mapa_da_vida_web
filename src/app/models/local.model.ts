// locais.model.ts
export type TipoLocal = 'Parque' | 'Academia' | 'Academia ao ar livre' | 'Praça';

// Classe que implementa a interface Local
export class Local implements Local {
  id: number;
  nome: string;
  categoria: TipoLocal;
  cep: number;
  endereco: string;
  descricao: string;
  imagem: string;
  lat: number;
  lng: number;

  constructor(id: number, nome: string, categoria: TipoLocal, endereco: string, descricao: string, imagem: string, lat: number, lng: number, cep: number) {
    this.id = id;
    this.nome = nome;
    this.categoria = categoria;
    this.endereco = endereco;
    this.descricao = descricao;
    this.imagem = imagem;
    this.lat = lat;
    this.lng = lng;
    this.cep = cep;
  }
}
