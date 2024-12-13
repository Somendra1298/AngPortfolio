import { Component } from '@angular/core';
import { LABELS } from '../../../shared/Labels';
import { PrimeNgModule } from '../../../shared/prime-ng.module';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {
  constructor(public dialogService: DialogService) {
    this.LABELS = LABELS.intoduction;
  }
  LABELS: any;
  ref: DynamicDialogRef | undefined;

  openDialog() {
    this.ref = this.dialogService.open(ContactComponent, {
      header: this.LABELS.MODALTITLE,
      modal: true,
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw'
      },
    });
  }
}
