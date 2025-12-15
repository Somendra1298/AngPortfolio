import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private toastSubject = new Subject<any>();
  toast$ = this.toastSubject.asObservable();

  updateToastMessage(message: any) {
    this.toastSubject.next(message);
  }
}
