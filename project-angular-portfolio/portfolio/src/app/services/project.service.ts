import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: Project[] = [
    {
      number: 1,
      title: 'Sistema de Gestão Bibliotecária',
      description: 'Sistema para gestão eficiente de bibliotecas, facilitando controle de empréstimos, devoluções e acervo',
      image: 'https://junkielabs.in/assets/img/sections/inside-labs/paper-planning.png',
    },
    {
      number: 2,
      title: 'Sistema de Gestão Bibliotecária',
      description: 'Sistema para gestão eficiente de bibliotecas, facilitando controle de empréstimos, devoluções e acervo',
      image: 'https://junkielabs.in/assets/img/showcase/products/apps/list/sensify.png',
    }
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectByNumber(number: number): Project | undefined {
    return this.projects.find(project => project.number === number);
  }
  
}
