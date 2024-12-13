import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../shared/prime-ng.module';
import { LABELS } from '../../../shared/Labels';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  LABELS: any;

  constructor() {
    this.LABELS = LABELS.projects;
  }

}
