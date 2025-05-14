import { Component, Input, Output, EventEmitter, HostListener, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-draggable-window',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="draggable-window" [hidden]="!isVisible" #windowContainer>
      <div class="card border-light mb-3" style="max-width: 20rem;">
        <div class="card-header" #dragHandle style="cursor: move; position: relative;">
          {{title}}
          <button  id="cerrarVentana" (click)="onClose()" aria-label="Cerrar" 
                  style="position: absolute; right: 10px; top: 5px; background: none; border: none; font-size: 1.2em;">
            ×
          </button>
        </div>
        <div class="card-body">
          <strong class="card-title">{{title}}</strong>
          <p class="card-text" [innerHTML]="content"></p>
        </div>
      </div>
    </div>
    
    <button class="toggle-btn" *ngIf="!isVisible" id="abrirVentana" (click)="openWindow()" 
            style="position: fixed; top: 10px; right: 10px;">
      Abrir Ventana
    </button>
  `,
  styles: [`
    .draggable-window {
      position: fixed;
      top: 100px;
      left: 20px;
      z-index: 1000;
    }
    .toggle-btn {
  background: #1976d2;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.toggle-btn:hover {
  background: #1565c0;
}

  `]
})
export class DraggableWindowComponent implements OnInit, OnDestroy {
  @Input() title: string = 'Ventana';
  @Input() content: string = 'Contenido de la ventana...';
  @Output() windowClosed = new EventEmitter<void>();
  
  isVisible: boolean = true;
  private isDragging = false;
  private offsetX = 0;
  private offsetY = 0;
  private dragHandle!: HTMLElement;
  private windowContainer!: HTMLElement;
  
  private moveListener!: () => void;
  private upListener!: () => void;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.dragHandle = this.el.nativeElement.querySelector('.card-header');
    this.windowContainer = this.el.nativeElement.querySelector('.draggable-window');
    
    this.renderer.listen(this.dragHandle, 'mousedown', (e) => this.startDrag(e));
  }

  ngOnDestroy() {
    if (this.moveListener) this.moveListener();
    if (this.upListener) this.upListener();
  }

  startDrag(event: MouseEvent) {
    if (event.target !== this.dragHandle && !this.dragHandle.contains(event.target as Node)) {
      return;
    }
    
    this.isDragging = true;
    const rect = this.windowContainer.getBoundingClientRect();
    this.offsetX = event.clientX - rect.left;
    this.offsetY = event.clientY - rect.top;
    event.preventDefault();

    this.moveListener = this.renderer.listen('document', 'mousemove', (e) => this.onDrag(e));
    this.upListener = this.renderer.listen('document', 'mouseup', () => this.stopDrag());
  }

  onDrag(event: MouseEvent) {
    if (!this.isDragging) return;
    
    const x = event.clientX - this.offsetX;
    const y = event.clientY - this.offsetY;
    
    this.windowContainer.style.left = `${x}px`;
    this.windowContainer.style.top = `${y}px`;
  }

  stopDrag() {
    this.isDragging = false;
    if (this.moveListener) this.moveListener();
    if (this.upListener) this.upListener();
  }

  onClose() {
    this.isVisible = false;
    this.windowClosed.emit();
  }

  openWindow() {
    this.isVisible = true;
  }
}