import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
  ChangeDetectorRef,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [],
  templateUrl: './portal.html',
  styleUrls: ['./portal.scss']
})

export class PortalComponent {
  //imputs
  @Input() activeSup: boolean = false;
  @Input() activeInf: boolean = false;

  private animating = false;
  fallStart = 0;
  fallEnd = 0;
  private _activated: boolean = false;

  @Input()
  set activated(value: boolean) {
    this._activated = value;

    if (this._activated && !this.animating) {
      this.loopAnimacion();
    }
  }

  get activated() {
    return this._activated;
  }

  @ViewChild('portalTop') portalTop!: ElementRef < HTMLDivElement > ;
  @ViewChild('portalBottom') portalBottom!: ElementRef < HTMLDivElement > ;
  @ViewChild('rick') rick!:ElementRef< HTMLDivElement >;

  constructor(private cdr: ChangeDetectorRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.updateFallPositions();
    this.loopAnimacion();
  }

  @HostListener('window:resize') onResize() {
    this.updateFallPositions();
  }

  private updateFallPositions() {
    const topRect = this.portalTop.nativeElement.getBoundingClientRect();
    const bottomRect = this.portalBottom.nativeElement.getBoundingClientRect();

    const sceneTop = this.portalTop.nativeElement.offsetParent!.getBoundingClientRect().top;

    this.fallStart = (topRect.top + topRect.height / 2) - sceneTop;
    this.fallEnd = (bottomRect.top + bottomRect.height / 2) - sceneTop;

    this.cdr.detectChanges();
  }

  triggerFall() {
    this.activated = true;
    this.loopAnimacion();
  }

  private async loopAnimacion() {
    this.animating = true;
  
    while (this._activated) {
      await this.iniciarAnimacion();
      await new Promise(res => setTimeout(res, 1000));  //esperamos 1s
    }
  
    this.animating = false;
  }

  private iniciarAnimacion(): Promise<void> {
    return new Promise(resolve => {
      const rickElement = this.rick.nativeElement;

      // Reiniciamos la animación
      this.renderer.removeClass(rickElement, 'falling');
      void rickElement.offsetWidth; // forzar para reiniciar animación
      this.renderer.addClass(rickElement, 'falling');

      // Esperamos a que termine
      const handler = () => {
        rickElement.removeEventListener('animationend', handler);
        resolve();
      };

      rickElement.addEventListener('animationend', handler);
    });
  }
}