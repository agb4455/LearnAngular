import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

interface Chibi {
  id: number;
  posX: number;
  posY: number;
  velocidad: number;
  direccion: number; // 1 = derecha, -1 = izquierda
}

@Component({
  selector: 'app-run',
  imports: [CommonModule],
  templateUrl: './run.html',
  styleUrl: './run.css'
})
export class Run implements OnInit, OnDestroy {

  chibis: Chibi[] = [];
  private animationFrame?: number;
  private screenWidth: number = 0;

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    
    
    for (let i = 0; i < 5; i++) {
      this.chibis.push({
        id: i,
        posX: Math.random() * 200 - 100, 
        posY: (i * 18) + 10, 
        velocidad: Math.random() * 2 + 1.5,
        direccion: 1 
      });
    }

    this.animate();
  }

  ngOnDestroy() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }

  animate() {
    this.chibis.forEach(chibi => {
      // Mover el chibi
      chibi.posX += chibi.velocidad * chibi.direccion;

      
      if (chibi.posX >= this.screenWidth - 100) {
        chibi.posX = this.screenWidth - 100;
        chibi.direccion = -1; 
        chibi.velocidad = Math.random() * 2 + 1.5; 
      } else if (chibi.posX <= 0) {
        chibi.posX = 0;
        chibi.direccion = 1; 
        chibi.velocidad = Math.random() * 2 + 1.5; 
      }
    });

    this.animationFrame = requestAnimationFrame(() => this.animate());
  }

  getTransform(chibi: Chibi) {
    return {
      transform: `translate(${chibi.posX}px, 0) scaleX(${chibi.direccion})`,
      top: `${chibi.posY}%`
    };
  }

}