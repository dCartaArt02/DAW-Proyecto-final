import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SvgMapComponent } from './svg-map/svg-map.component';
import { CuscatlanComponent } from './departamentos/cuscatlan/cuscatlan.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, SvgMapComponent,],
  styleUrls: ['./app.component.css'],
  template: `
   <div class="todo">
    <app-navbar></app-navbar>
    <div class="container">
    </div>
    
    <div class="content-container">
      <router-outlet></router-outlet>
      <app-svg-map *ngIf="router.url === '/'"></app-svg-map>
    
      <
    </div>
    <br>
    <br>
    </div>
    <footer class="footer bg-dark text-white text-center py-3">
      <p>&#169; SALAMALECOS 2025</p>
    </footer>
    
  `,
})
export class AppComponent {
  constructor(public router: Router) {}
  isDepartmentRoute(): boolean {
   
    return window.location.pathname.includes('/departamento/');
    
  }
  
}