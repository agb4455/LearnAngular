import { Component } from '@angular/core';

@Component({
  selector: 'contador-component',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class ContadorComponent {

  numero:number = 0;

  incrementar(){
    this.numero++;
  }

  decrementar(){
    this.numero--;
  }

  reset(){
    this.numero = 0;
  }

}
