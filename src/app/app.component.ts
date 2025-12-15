import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';

import { PrimeNgModule } from '../shared/prime-ng.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToastMessageComponent } from './components/toast-message/toast-message.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PrimeNgModule,
    NavbarComponent,
    ToastMessageComponent
  ],
  providers: [MessageService],   // ✅ IMPORTANT
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
