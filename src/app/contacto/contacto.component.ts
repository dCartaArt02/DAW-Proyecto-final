import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AfterViewInit, ElementRef } from '@angular/core';
declare const $: any;

interface ContactEntry {
  nombre: string;
  apellidos: string;
  direccion?: string;
  email: string;
  telefono?: string;
  mensaje: string;
}

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-contacto',
  templateUrl: 'contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})


export class ContactoComponent implements AfterViewInit {
  readonly STORAGE_KEY = 'contactEntries';
  entries: ContactEntry[] = [];
  model: ContactEntry = {
    nombre: '',
    apellidos: '',
    direccion: '',
    email: '',
    telefono: '',
    mensaje: '',
  };
  editIndex: number | null = null;
  error: string | null = null;

  ngOnInit(): void {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    this.entries = saved ? JSON.parse(saved) : [];
  }

  private save(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.entries));
  }

  onSubmit(): void {
    if (!this.model.nombre || !this.model.apellidos || !this.model.email || !this.model.mensaje) {
      this.error = 'Por favor completa todos los campos requeridos.';
      return;
    }
    this.error = null;
    if (this.editIndex !== null) {
      this.entries[this.editIndex] = { ...this.model };
    } else {
      this.entries.push({ ...this.model });
    }
    this.save();
    this.resetForm();
  }

  onEdit(index: number): void {
    this.editIndex = index;
    this.model = { ...this.entries[index] };
    this.error = null;
  }

  onDelete(index: number): void {
    this.entries.splice(index, 1);
    this.save();
    if (this.editIndex === index) {
      this.resetForm();
    }
  }

  cancelEdit(): void {
    this.resetForm();
  }

  private resetForm(): void {
    this.model = {
      nombre: '',
      apellidos: '',
      direccion: '',
      email: '',
      telefono: '',
      mensaje: '',
    };
    this.editIndex = null;
    this.error = null;
  }

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    
    const $list = $(this.el.nativeElement).find('#contactList');
    

    $list.on('click', 'button[data-action="delete"]', (e: JQuery.ClickEvent) => {
  const $li = $(e.currentTarget).closest('li');
      const idx = +$li.data('index');
      this.onDelete(idx);

      $li.slideUp(200, () => $li.remove());
    });


    const $form = $(this.el.nativeElement).find('#contactForm');

    $form.on('submit', (e: JQuery.Event) =>{
      e.preventDefault();
      const previousLength = this.entries.length;
      this.onSubmit();

      if (this.entries.length > previousLength) {

        const $newLi = $list.children('li').last().hide();
        $newLi.fadeIn(300);
      }
    });
  }

}