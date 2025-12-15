import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../shared/prime-ng.module';
import { LABELS } from '../../../shared/Labels';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [PrimeNgModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  LABELS: any;
  contactForm: any;   // ✅ FIXED
  showInfo: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService
  ) {
    this.LABELS = LABELS.contact;
    this.form();
  }

  form() {
    this.contactForm = this.formBuilder.group({
      Firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{1,}$')]],
      Lastname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{1,}$')]],
      Email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      Phone: ['', [Validators.required, Validators.pattern('^\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$')]],
      Comments: ['', [Validators.required]]
    });
  }

  submit(event: Event) {
    event.preventDefault();

    if (this.contactForm.valid) {

      emailjs
        .sendForm(
          this.LABELS.EMAILJS.SERVICEID,
          this.LABELS.EMAILJS.TEMPLATEID,
          event.target as HTMLFormElement,
          { publicKey: this.LABELS.EMAILJS.PUBLICKEY }
        )
        .then(() => {
          this.sharedService.showToast({

            severity: 'success',
            summary: 'Success',
            detail: 'Email sent successfully'
          });
          this.contactForm.reset();
        })
        .catch((error) => {
          console.error('EmailJS Error:', error);
          this.sharedService.showToast({

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
