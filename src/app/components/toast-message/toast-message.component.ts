import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-toast-message',
  standalone: true,
  imports: [ToastModule],
  template: `<p-toast></p-toast>`,
  providers: [MessageService]
})
export class ToastMessageComponent implements OnInit {

  constructor(
    private messageService: MessageService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.sharedService.toast$.subscribe((toast) => {
      if (toast?.severity) {
        this.messageService.add(toast);
      }
    });
  }
}
