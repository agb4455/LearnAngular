import { Component, inject, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CokkieService } from '../cokkie-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HalloweenColorChange } from '../../../services/halloween-color-change';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cokie-clicker',
  imports: [CommonModule, TranslateModule],
  templateUrl: './cokie-clicker.html',
  styleUrl: './cokie-clicker.scss',
})
export class CokieClicker implements AfterViewInit, OnDestroy {
  private cokkieService = inject(CokkieService);
  public themeService = inject(HalloweenColorChange);

  @ViewChild('matrixCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;

  codes$: Observable<number>;
  codesPerSecond$: Observable<number>;
  clickMultiplier$: Observable<number>;
  isClicking = false;

  private animationId?: number;

  constructor() {
    this.codes$ = this.cokkieService.getCokies$();
    this.codesPerSecond$ = this.cokkieService.getCokkiesPerSecoth();
    this.clickMultiplier$ = this.cokkieService.getClickMultiplier$();
  }

  ngAfterViewInit() {
    this.initMatrix();
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  private initMatrix() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const chars = '01{}()<>/;[].-+=*&^%$#@!ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = Array(Math.floor(columns)).fill(1);

    let currentCodesPerSecond = 0;

    // Subscribe to codes per second to adjust animation speed
    this.codesPerSecond$.subscribe(cps => {
      currentCodesPerSecond = cps;
    });

    const draw = () => {
      // Base speed is 0.05, increases with codes per second
      // Speed formula: 0.5 + (cps / 100) capped at 3x speed
      const speedMultiplier = Math.min(0.5 + (currentCodesPerSecond / 100), 3);

      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const accentColor = this.themeService.getAccentColor();
      ctx.fillStyle = accentColor;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop with probability based on speed
        if (drops[i] * fontSize > canvas.height && Math.random() > (1 - speedMultiplier * 0.01)) {
          drops[i] = 0;
        }

        // Move drops faster based on codes per second
        drops[i] += speedMultiplier;
      }

      this.animationId = requestAnimationFrame(draw);
    };

    draw();
  }

  onCodeClick(event: MouseEvent) {
    this.cokkieService.push();
    this.isClicking = true;
    setTimeout(() => this.isClicking = false, 100);

    this.spawnParticle(event);
  }

  private spawnParticle(event: MouseEvent) {
    const particle = document.createElement('div');
    particle.className = 'click-particle';
    // The `| async` pipe is for templates. In a TypeScript method, you need to subscribe to the Observable.
    // Keeping the original logic to subscribe and get the value.
    this.clickMultiplier$.subscribe(mult => {
      particle.textContent = `+ ${mult} `;
    }).unsubscribe();
    particle.style.left = `${event.clientX}px`;
    particle.style.top = `${event.clientY}px`;

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 1000);
  }
}
