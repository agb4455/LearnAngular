import { Component, QueryList, signal, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Semaforo } from "./components/semaforo/semaforo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Semaforo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LearnAngular');

  cuentaAtras: number = 5;

  @ViewChildren(Semaforo) semaforos!: QueryList<Semaforo>;

  timer(){
      let interval = setInterval(() => {
      this.cuentaAtras--;
      if(this.cuentaAtras > 3){
        this.cambiarColorSemaforo(this.semaforos, 0);
      } else if(this.cuentaAtras > 0){
        this.cambiarColorSemaforo(this.semaforos, 1);
      } else if(this.cuentaAtras === 0){
        this.cambiarColorSemaforo(this.semaforos, 2);
        clearInterval(interval);
      }
    }, 1000);
  }

  ngOnInit() {
    this.timer();
  }

  cambiarColorSemaforo(semaforos: QueryList<Semaforo>, nuevoColor: number) {
    semaforos.forEach(semaforo => {
      semaforo.cambiarColor(nuevoColor);
    });
  }

  reiniciar(){
    this.cuentaAtras = 5;
    this.timer();
    for(let semaforo of this.semaforos){
      semaforo.cambiarColor(0);
    }
  }
}
