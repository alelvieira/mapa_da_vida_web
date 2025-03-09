// locais.model.ts
export type TipoLocal = 'Parque' | 'Academia' | 'Academia ao ar livre';

// Classe que implementa a interface Local
export class Local implements Local {
  id: number;
  nome: string;
  categoria: string;
  endereco: string;
  descricao: string;
  imagem: string;
  lat: number;
  lng: number;
  tipo: TipoLocal;

  constructor(id: number, nome: string, categoria: string, endereco: string, descricao: string, imagem: string, lat: number, lng: number, tipo: TipoLocal) {
    this.id = id;
    this.nome = nome;
    this.categoria = categoria;
    this.endereco = endereco;
    this.descricao = descricao;
    this.imagem = imagem;
    this.lat = lat;
    this.lng = lng;
    this.tipo = tipo;
  }
}
