import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ProjectsComponent } from '../projects/projects.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-home',
    imports: [HeaderComponent, ProjectsComponent, AboutMeComponent, FooterComponent, FormsModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})


export class HomeComponent {

  name: string = 'JOÃO CANHETE';

  toggleTheme() {
    throw new Error('Method not implemented.');
  }
  isScrolled = false; // Variável para controlar a visibilidade do indicador de rolagem

  // Ouve o evento de rolagem da janela
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50; // Define "isScrolled" como true se a rolagem estiver a mais de 50px
  }





}
