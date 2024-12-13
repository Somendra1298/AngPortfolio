import { Component, OnInit } from '@angular/core';
import { PrimeNgModule } from '../../../shared/prime-ng.module';
import { MessageService } from 'primeng/api';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-toast-message',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './toast-message.component.html',
  styleUrl: './toast-message.component.scss'
})
export class ToastMessageComponent implements OnInit {

  visible: boolean = false;
  toastObj: any = {
    severity: '',
    summary: '',
    detail: ''
  };
  constructor(private messageService: MessageService, private sharedService: SharedService) { }
  ngOnInit() {
    this.show()
  }


  show() {
    this.sharedService.$toastData.subscribe({
      next: (response) => {
        console.log(response);
        if (response.severity !== '' && response.summary !== '' && response.details !== '') {
          this.visible = true;
          this.toastObj = {
            'severity': response.severity,
            'summary': response.summary,
            'detail': response.detail
          }
          this.messageService.add({ severity: response.severity, summary: response.summary, detail: response.detail });
        }
      }
    })
  }
}
