import { Component, QueryList, signal, ViewChild, ViewChildren } from '@angular/core';
import { SemaforoDoble } from './components/semaforo-doble/semaforo-doble';
import { Contador } from "./components/contador/contador";
import { ContadorSemaforo } from './components/contador-semaforo/contador-semaforo';
import { Matatopos } from "./components/matatopos/matatopos";

@Component({
  selector: 'app-root',
  imports: [SemaforoDoble, Contador, ContadorSemaforo, Matatopos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('LearnAngular'); 
}
