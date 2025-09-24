import { Component, QueryList, signal, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SemaforoDoble } from './components/semaforo-doble/semaforo-doble';

@Component({
  selector: 'app-root',
  imports: [SemaforoDoble],
  templateUrl: './app.html',
  styleUrl: './app.css'
})



export class App {
  protected readonly title = signal('LearnAngular'); 
}
