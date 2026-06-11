import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project.service';

@Component({
    selector: 'app-projects',
    imports: [CommonModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }
}
