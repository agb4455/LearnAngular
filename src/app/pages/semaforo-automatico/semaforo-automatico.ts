import { Component } from '@angular/core';
import { SemaforoDoble } from '../../components/semaforo-doble/semaforo-doble';

@Component({
  selector: 'app-semaforo-automatico-page',
  imports: [SemaforoDoble],
  standalone: true,
  templateUrl: './semaforo-automatico.html',
  styleUrl: './semaforo-automatico.css'
})
export class SemaforoAutomaticoPage {

}
