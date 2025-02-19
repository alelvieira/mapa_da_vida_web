import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  // Verifica se `localStorage` está disponível
  private isLocalStorageAvailable(): boolean {
    try {
      return typeof localStorage !== 'undefined';
    } catch (e) {
      return false;
    }
  }

  // Salva um dado no LocalStorage
  setItem(key: string, value: any) {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  // Recupera um dado do LocalStorage
  getItem(key: string): any {
    if (this.isLocalStorageAvailable()) {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    }
    return null; // Retorna null caso não esteja no navegador
  }

  // Remove um item específico do LocalStorage
  removeItem(key: string) {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem(key);
    }
  }

  // Limpa tudo do LocalStorage
  clear() {
    if (this.isLocalStorageAvailable()) {
      localStorage.clear();
    }
  }

  isLoggedIn(): boolean {
    return this.getItem('user') !== null;
  }
}
