import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ToastMessage {
  severity: 'success' | 'error' | 'info' | 'warn';
  summary: string;
  detail: string;
}

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private toastSubject = new Subject<ToastMessage>();
  toast$ = this.toastSubject.asObservable();

  showToast(message: ToastMessage) {
    this.toastSubject.next(message);
  }
}
