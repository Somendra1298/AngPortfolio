import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import emailjs from '@emailjs/browser';

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

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    public ref: DynamicDialogRef
  ) {
    this.LABELS = LABELS.contact;
    this.buildForm();
  }

  buildForm() {
    this.contactForm = this.fb.group({
      Firstname: ['', Validators.required],
      Lastname: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Phone: ['', Validators.required],
      Comments: ['', Validators.required]
    });
  }

  submit(event: Event) {
    event.preventDefault();

    if (!this.contactForm.valid) {
      this.contactForm.markAllAsTouched();
      return;
    }

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
      this.ref.close();
    })
    .catch(() => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Email failed. Please try again later.'
      });
    });
  }

  cancel() {
    this.ref.close();
  }
}
