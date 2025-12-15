import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { MessageService } from 'primeng/api';

import { PrimeNgModule } from '../../../shared/prime-ng.module';
import { LABELS } from '../../../shared/Labels';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [PrimeNgModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  LABELS: any;
  contactForm: any;
  showInfo = false;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {
    this.LABELS = LABELS.contact;
    this.createForm();
  }

  createForm() {
    this.contactForm = this.formBuilder.group({
      Firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      Lastname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      Email: ['', [Validators.required, Validators.email]],
      Phone: ['', [Validators.required]],
      Comments: ['', [Validators.required]]
    });
  }

  submit(event: Event) {
    event.preventDefault();

    if (this.contactForm.valid) {

      emailjs.sendForm(
        this.LABELS.EMAILJS.SERVICEID,
        this.LABELS.EMAILJS.TEMPLATEID,
        event.target as HTMLFormElement,
        { publicKey: this.LABELS.EMAILJS.PUBLICKEY }
      )
      .then(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Email sent successfully'
        });

        this.contactForm.reset();
      })
      .catch(() => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Email failed. Please try again later.'
        });
      });

    } else {
      this.showInfo = true;
    }
  }

  cancel() {
    this.contactForm.reset();
    this.showInfo = false;
  }
}
