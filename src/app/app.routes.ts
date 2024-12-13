import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/introduction/introduction.component').then(m => m.IntroductionComponent),
        pathMatch: 'full'
    },
    {
        path: 'Home',
        loadComponent: () => import('./components/introduction/introduction.component').then(m => m.IntroductionComponent),
    },
    {
        path: 'Projects',
        loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent),
    },
    {
        path: 'Experience',
        loadComponent: () => import('./components/experience/experience.component').then(m => m.ExperienceComponent),
    },
    {
        path: 'Skills',
        loadComponent: () => import('./components/skills/skills.component').then(m => m.SkillsComponent),
    },
    {
        path: '**',
        loadComponent: () => import('./components/unavailable/unavailable.component').then(m => m.UnavailableComponent),
    }
];
