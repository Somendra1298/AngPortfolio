import { Component, OnInit } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SharedService, ToastMessage } from '../../shared/shared.service';

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
    this.sharedService.toast$.subscribe((toast: ToastMessage) => {
      this.messageService.add(toast);
    });
  }
}
