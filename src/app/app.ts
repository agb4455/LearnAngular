import { Component, QueryList, signal, ViewChild, ViewChildren } from '@angular/core';
import { SemaforoDoble } from './components/semaforo-doble/semaforo-doble';
import { Contador } from "./components/contador/contador";

@Component({
  selector: 'app-root',
  imports: [SemaforoDoble, Contador],
  templateUrl: './app.html',
  styleUrl: './app.css'
})



export class App {
  protected readonly title = signal('LearnAngular'); 
}
