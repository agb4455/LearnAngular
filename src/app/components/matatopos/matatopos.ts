import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, inject} from '@angular/core';
import { HalloweenColorChange } from '../../services/halloween-color-change';


@Component({
  selector: 'matatopos-component',
  imports: [NgFor, NgIf,CommonModule],
  standalone: true,
  templateUrl: './matatopos.html',
  styleUrl: './matatopos.scss'
})
export class MatatoposComponent {


  toposMuertos:number = -1;
  desapareciendo = false;   // controla animación de salida
  apareciendo = false;

  topos:number[][] = [[1,2,3],[4,5,6],[7,8,9]];
  
  activo:number = -1;

  randomizar(btn:number){
    if(btn === this.activo){
      this.desapareciendo = true; // hacemos desaparecer al topo
      setTimeout(() => {  //le doy tiempo a la animacion de salida y luego meto la de entrada

        this.desapareciendo = false; 

        this.toposMuertos++;

        this.activo = Math.floor(Math.random() * 9);  
        console.log(this.activo);

        this.apareciendo = false; //activo animacion de netrada
        setTimeout(() => this.apareciendo = true, 10);
      },300);
    }
  }

  ngOnInit(){
    this.randomizar(this.activo);
  }
}
