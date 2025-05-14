import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
declare const $: any;

@Component({
  selector: 'app-desarrolladores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './desarrollador.component.html',
  styleUrls: ['./desarrollador.component.css']
})
export class DesarrolladoresComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const $container = $(this.el.nativeElement).find('#lista-devs');

    $.ajax({
      url: 'https://680bce112ea307e081d262bf.mockapi.io/api/desarrolladores', // ⚠️ Reemplaza con tu URL real
      method: 'GET',
      success: function (data: any[]) {
        data.forEach(dev => {
          $container.append(`
            <div class="salamaleco">
      <div class="card mb-3" style="max-width: 740px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${dev.URL}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${dev.name}</h5>
              <p class="card-text">${dev.rol}</p>
            </div>
          </div>
        </div>
      </div>
      </div>


          `);
        });
      },
      error: function () {
        $container.append('<li>Error al cargar los desarrolladores</li>');
      }
    });
  }
}
