import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './semaforo.html',
  styleUrl: './semaforo.css'
})

export class Semaforo {
  color: string = 'rojo';

  cambiarColor(nuevoColor: number) {
    if(nuevoColor === 0) {
      this.color = 'rojo';
    } else if(nuevoColor === 1) {
      this.color = 'amarillo';
    } else if(nuevoColor === 2) {
      this.color = 'verde';
    }else{
      throw new Error('Color no válido');
    }
  }

}
