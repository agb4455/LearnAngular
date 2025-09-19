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
  private intervalId : any;
  MAX_TIME: number = 5;

  cuentaAtras: number = this.MAX_TIME;
  time:string = this.cuentaAtras.toString();

  @ViewChildren(Semaforo) semaforos!: QueryList<Semaforo>;

  timer(){
    if(this.intervalId){
      clearInterval(this.intervalId);
    }

    this.cuentaAtras = this.MAX_TIME;
    this.time = this.cuentaAtras.toString();
    this.cambiarColorSemaforo(0);

    this.intervalId = setInterval(() => {
      this.cuentaAtras--;
      this.time = this.cuentaAtras.toString();
      if(this.cuentaAtras > 3){
        this.cambiarColorSemaforo(0);
      } else if(this.cuentaAtras > 0){
        this.cambiarColorSemaforo(1);
      } else if(this.cuentaAtras === 0){
        this.time = "GO!";
        this.cambiarColorSemaforo(2);
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  ngAfterViewInit() {
    this.timer();
  }

  ngOnDestroy() {
    if(this.intervalId){
      clearInterval(this.intervalId);
    }
  }

  cambiarColorSemaforo(nuevoColor: number) {
    this.semaforos.forEach(semaforo => {
      semaforo.cambiarColor(nuevoColor);
    });
  }

  reiniciar(){
    this.timer();
  }
}
