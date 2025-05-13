import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="/">CONOCE EL SALVADOR</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" routerLink="/creadores">Creadores</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/contacto">Contactanos</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navZonas" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                ZONAS GEOGRÁFICAS EL SALVADOR
              </a>
              <ul class="dropdown-menu" aria-labelledby="navZonas">
                <li class="dropdown-submenu">
                  <a class="dropdown-item dropdown-toggle" href="#">Occidentales</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" routerLink="/departamento/ahuachapan">Ahuachapán</a></li>
                    <li><a class="dropdown-item" routerLink="/departamento/santa-ana">Santa Ana</a></li>
                    <li><a class="dropdown-item" routerLink="/departamento/sonsonate">Sonsonate</a></li>
                  </ul>
                </li>
                <li class="dropdown-submenu">
                  <a class="dropdown-item dropdown-toggle" href="#">Centrales</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" routerLink="/departamento/chalatenango">Chalatenango</a></li>
                    <li><a class="dropdown-item" routerLink="/departamento/la-libertad">La Libertad</a></li>
                    <li><a class="dropdown-item" routerLink="/departamento/san-salvador">San Salvador</a></li>
                    <li><a class="dropdown-item" routerLink="/departamento/cuscatlan">Cuscatlán</a></li>
                    <li><a class="dropdown-item" routerLink="/departamento/cabanas">Cabañas</a></li>
                    <li><a class="dropdown-item" routerLink="/departamento/san-vicente">San Vicente</a></li>
                    <li><a class="dropdown-item" routerLink="/departamento/la-paz">La Paz</a></li>
                  </ul>
                </li>
                <li class="dropdown-submenu">
                  <a class="dropdown-item dropdown-toggle" href="#">Orientales</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" routerLink="/departamento/usulutan">Usulután</a></li>
                    <li><a class="dropdown-item" routerLink="/departamento/san-miguel">San Miguel</a></li>
                    <li><a class="dropdown-item" routerLink="/departamento/morazan">Morazán</a></li>
                    <li><a class="dropdown-item" routerLink="/departamento/la-union">La Unión</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .dropdown-submenu {
      position: relative;
    }
    
    .dropdown-submenu .dropdown-menu {
      top: 0;
      left: 100%;
      margin-top: -1px;
    }
    
    .dropdown-submenu:hover .dropdown-menu {
      display: block;
    }
  `]

})
export class NavbarComponent {
  constructor(public router: Router){}
  navigateTo(departamentos: string) {
    this.router.navigate([`/${departamentos}`]);
  }
}
