import { Component, ViewChild } from '@angular/core';
import { ContadorComponent } from "../contador/contador";
import { Semaforo } from "../semaforo/semaforo";

@Component({
  selector: 'app-contador-semaforo',
  imports: [ContadorComponent, Semaforo],
  standalone: true,
  templateUrl: './contador-semaforo.html',
  styleUrl: './contador-semaforo.css'
})
export class ContadorSemaforo {
  @ViewChild(ContadorComponent) contador!: ContadorComponent;
  @ViewChild(Semaforo) semaforo!: Semaforo;

  numero:number = this.contador?.numero;
  
  cambiarColor(){
    if(this.numero != this.contador.numero){
      this.numero = this.contador.numero;
      this.semaforo.cambiarColor(this.numero);
    }
  }

  ngAfterViewInit(){
    setInterval(() => {
      this.cambiarColor();
    }, 100);
  }
}
