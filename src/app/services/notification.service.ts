import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private messageSubject = new BehaviorSubject<string | null>(null);
  message$ = this.messageSubject.asObservable();

  showMessage(message: string, duration: number = 3000) {
    this.messageSubject.next(message);
    setTimeout(() => this.messageSubject.next(null), duration);
  }
}
