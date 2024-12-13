import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../shared/prime-ng.module';
import { LABELS } from '../../../shared/Labels';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  LABELS: any;

  constructor() {
    this.LABELS = LABELS.experience;
  }

  getKey(item: any, index: number) {
    console.log(Object.keys(item)[index]);

    return Object.keys(item)[index] || '';
  }

}
