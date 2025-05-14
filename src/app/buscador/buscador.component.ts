import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { signal } from '@angular/core';

declare const $: any;

interface Departamento {
  id: string;
  codigo: string;
  name: string;
  ruta: string;
  capital?: string;
}

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
  animations: [
    trigger('expandCollapse', [
      transition(':enter', [
        style({ height: 0, opacity: 0, overflow: 'hidden' }),
        animate('300ms ease-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ height: '*', opacity: 1, overflow: 'hidden' }),
        animate('300ms ease-in', style({ height: 0, opacity: 0 }))
      ])
    ])
  ]
})
export class BuscadorComponent implements AfterViewInit {
  searchTerm = '';
  isExpanded = signal(false);
  showResults = signal(false);

  // Datos de ejemplo - reemplaza con tu fuente real
  departamentos: Departamento[] = [
    {
      id: "SV-AH",
      codigo: "AH",
      name: "Ahuachapán",
      ruta: "/departamento/ahuachapan",
      capital: "Ahuachapán Centro"
    },
    {
      id: "SV-CA",
      codigo: "CA",
      name: "Cabañas",
      ruta: "/departamento/cabanas",
      capital: "Sensuntepeque"

    },
    {
      id: "SV-CH",
      codigo: "CH",
      name: "Chalatenango",
      ruta: "/departamento/chalatenango",
      capital: "Chalatenango"

    },
    {
      id: "SV-CU",
      codigo: "CU",
      name: "Cuscatlán",
      ruta: "/departamento/cuscatlan",
      capital: "Cojutepeque"
    },
    {
      id: "SV-LI",
      codigo: "LI",
      name: "La Libertad",
      ruta: "/departamento/la-libertad",
      capital: "Santa Tecla"

    },
    {
      id: "SV-PA",
      codigo: "PA",
      name: "La Paz",
      ruta: "/departamento/la-paz"

    },
    {
      id: "SV-UN",
      codigo: "UN",
      name: "La Unión",
      ruta: "/departamento/la-union",
      capital: "La Unión"

    },
    {
      id: "SV-MO",
      codigo: "MO",
      name: "Morazán",
      ruta: "/departamento/morazan",
      capital: "San Francisco Gotera"

    },
    {
      id: "SV-SM",
      codigo: "SM",
      name: "San Miguel",
      ruta: "/departamento/san-miguel",
      capital: "San Miguel"

    },
    {
      id: "SV-SS",
      codigo: "SS",
      name: "San Salvador",
      ruta: "/departamento/san-salvador"
    },
    {
      id: "SV-SV",
      codigo: "SV",
      name: "San Vicente",
      ruta: "/departamento/san-vicente",
      capital: "San Vicente"
    },
    {
      id: "SV-SA",
      codigo: "SA",
      name: "Santa Ana",
      ruta: "/departamento/santa-ana",
      capital: "Santa Ana"
    },
    {
      id: "SV-SO",
      codigo: "SO",
      name: "Sonsonate",
      ruta: "/departamento/sonsonate",
      capital: "Sonsonate"
    },
    {
      id: "SV-US",
      codigo: "US",
      name: "Usulután",
      ruta: "/departamento/usulutan",
      capital: "Usulután"
    }
    
    // ... otros departamentos ...
  ];

  filteredDepartamentos = this.departamentos;

  toggleSearch() {
    this.isExpanded.update(prev => !prev);
    if (!this.isExpanded()) {
      this.searchTerm = '';
      this.filterDepartamentos();
    }
  }

  filterDepartamentos() {
    if (!this.searchTerm.trim()) {
      this.filteredDepartamentos = this.departamentos;
      this.showResults.set(false);
      return;
    }

    const term = this.searchTerm.toLowerCase();
    this.filteredDepartamentos = this.departamentos.filter(depto =>
      depto.name.toLowerCase().includes(term) ||
      depto.codigo.toLowerCase().includes(term)
    );
    this.showResults.set(true);
  }

   ngAfterViewInit() {
    // Inicia el input oculto para tu buscador
    $('#searchInput').hide();
  }
}