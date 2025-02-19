export type PlaceType = 'Parque' | 'Academia' | 'Academia ao ar livre';

export interface Place {
  name: string;
  category: string;
  address: string;
  description: string;
  lat: number;
  lng: number;
  type: string;  // Propriedade necessária
}

