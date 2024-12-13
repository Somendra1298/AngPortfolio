import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../shared/prime-ng.module';
import { LABELS } from '../../../shared/Labels';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  LABELS: any;

  constructor() {
    this.LABELS = LABELS.skills;
  }

}
