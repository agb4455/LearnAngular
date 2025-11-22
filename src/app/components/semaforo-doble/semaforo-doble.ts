import { Component, QueryList, ViewChildren } from '@angular/core';
import { Semaforo } from '../semaforo/semaforo';
import { NgFor, NgForOf } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-semaforo-doble',
  imports: [Semaforo, NgFor, TranslateModule],
  standalone: true,
  templateUrl: './semaforo-doble.html',
  styleUrl: './semaforo-doble.scss'
})

export class SemaforoDoble {
  // Variables

  numOfSemaforos = 5;

  private intervalId: ReturnType<typeof setInterval> | null = null;
  MAX_TIME: number = 5;

  cuentaAtras: number = this.MAX_TIME;
  time: string = this.cuentaAtras.toString();

  // ViewChilds

  @ViewChildren(Semaforo) semaforos!: QueryList<Semaforo>;

  // Lógica

  get semaforosArray() {
    return Array.from({ length: this.numOfSemaforos });
  }

  timer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.cuentaAtras = this.MAX_TIME;
    this.time = this.cuentaAtras.toString();
    this.cambiarColorSemaforo(0);

    this.intervalId = setInterval(() => {
      this.cuentaAtras--;
      this.time = this.cuentaAtras.toString();
      if (this.cuentaAtras > 3) {
        this.cambiarColorSemaforo(0);
      } else if (this.cuentaAtras > 0) {
        this.cambiarColorSemaforo(1);
      } else if (this.cuentaAtras === 0 && this.intervalId) {
        this.time = "GO!";
        this.cambiarColorSemaforo(2);
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  cambiarColorSemaforo(nuevoColor: number) {
    this.semaforos.forEach(semaforo => {
      semaforo.cambiarColor(nuevoColor);
    });
  }

  //Iniciadores

  ngAfterViewInit() {
    this.timer();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  reiniciar() {
    this.timer();
  }
}
