import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../shared/prime-ng.module';
import { LABELS } from '../../../shared/Labels';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contact } from '../../../shared/contact.modal';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { MessageService } from 'primeng/api';
import { SharedService } from '../../../shared/shared.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [PrimeNgModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  LABELS: any;
  TOAST: any;
  contactForm: any = new Contact();
  visible: boolean = false;
  toastObj: any = {
    severity: '',
    summary: '',
    detail: ''
  };
  messages: any = [{ severity: 'error', summary: 'Error:', detail: 'Please enter valid details before submitting.' }];
  showInfo: boolean = false;

  constructor(private formBuilder: FormBuilder, private sharedService: SharedService) {
    this.LABELS = LABELS.contact;
    this.TOAST = LABELS.toast;
    this.form();
  }

  form() {
    this.contactForm = this.formBuilder.group({
      Firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{1,}$')],],
      Lastname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{1,}$')]],
      Email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
      Phone: ['', [Validators.required, Validators.pattern('^\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$')]],
      Comments: ['', [Validators.required]]
    })
  }

  submit(event: Event) {
    event.preventDefault();
    console.log(event.target as HTMLFormElement);

    if (this.contactForm.status === 'VALID') {
      console.log('Valid', this.contactForm);
      emailjs.sendForm(this.LABELS.EMAILJS.SERVICEID, this.LABELS.EMAILJS.TEMPLATEID, event.target as HTMLFormElement, { publicKey: this.LABELS.EMAILJS.PUBLICKEY }).then((response) => {
        console.log('response', response.text);
        this.setToastData(true);
      },
        (error) => {
          console.log('error', (error as EmailJSResponseStatus).text);
          this.setToastData(false);
        }
      )
    } else {
      this.showInfo = true;
    }
  }

  cancel() {
    this.contactForm.reset();
    this.showInfo = false;
  }

  setToastData(success: boolean) {

    if (success) {
      this.toastObj = {
        'severity': this.TOAST.SUCCESS.severity,
        'summary': this.TOAST.SUCCESS.summary,
        'detail': this.TOAST.SUCCESS.detail
      }
      this.sharedService.updateToastMessage(this.toastObj)
    } else {
      this.toastObj = {
        'severity': this.TOAST.ERROR.severity,
        'summary': this.TOAST.ERROR.summary,
        'detail': this.TOAST.ERROR.detail
      }
      this.sharedService.updateToastMessage(this.toastObj)
    }

  }



}
