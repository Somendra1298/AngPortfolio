import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../shared/prime-ng.module';
import { Router, RouterModule } from '@angular/router';
import { LABELS } from '../../../shared/Labels';
import { ContactComponent } from '../contact/contact.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, PrimeNgModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public dialogService: DialogService, private router: Router) {
    this.LABELS = LABELS.navbar;
    this.navItems = this.LABELS.NAVITEMS;
    this.items = this.LABELS.MOBILENAVITEMS.map((item: any) => ({
      ...item,
      command: () => this.onMenuClick(item.label),
    }));
  }
  LABELS: any;
  navItems: any
  ref: DynamicDialogRef | undefined;
  items: any;

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

  onMenuClick(event: any) {
    if (event === 'Contact') {
      this.openDialog()
    } else if (event === 'Resume') {
      this.downloadResume();
    } else {
      this.router.navigate(['/' + event])
    }
  }

  downloadResume() {
    const fileUrl = 'assets/Somendra_Tripathi_Resume.pdf'; // Path to the PDF in assets
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'Somendra_Tripathi_Resume.pdf'; // Suggested file name
    anchor.click();
  }
}
