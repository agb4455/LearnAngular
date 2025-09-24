import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class Contador {

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
