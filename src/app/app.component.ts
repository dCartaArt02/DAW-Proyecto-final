import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SvgMapComponent } from './svg-map/svg-map.component';
import { DraggableWindowComponent } from './draggable-window/draggable-window.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, SvgMapComponent, DraggableWindowComponent],
  styleUrls: ['./app.component.css'],
  template: `

    <app-navbar></app-navbar>
    <div class="content-container">
      <router-outlet></router-outlet>
      <!-- Mostrar el mapa por defecto -->
      <app-svg-map *ngIf="!isDepartmentRoute()"></app-svg-map>
    </div>
    <footer class="footer bg-dark text-white text-center py-3">
      <p>&#169; SALAMALECOS 2025</p>
    </footer>
  `,
})
export class AppComponent {
  
  isDepartmentRoute(): boolean {
   
    return window.location.pathname.includes('/departamento/');
    
  }
}