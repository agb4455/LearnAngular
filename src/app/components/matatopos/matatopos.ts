import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component} from '@angular/core';


@Component({
  selector: 'matatopos-component',
  imports: [NgFor, NgIf,CommonModule],
  standalone: true,
  templateUrl: './matatopos.html',
  styleUrl: './matatopos.css'
})
export class MatatoposComponent {
  toposMuertos:number = -1;
  desapareciendo = false;   // controla animación de salida
  apareciendo = false;

  topos:number[][] = [[1,2,3],[4,5,6],[7,8,9]];
  
  activo:number = 4;

  randomizar(btn:number){
    if(btn === this.activo){
      this.desapareciendo = true; // hacemos desaparecer al topo
      setTimeout(() => {

        this.desapareciendo = false; // reseteamos la animacion de salida

        this.toposMuertos++;

        this.activo = Math.floor(Math.random() * 9);  //Randomizo el nuevo topo (da igual que sea el mismo)
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
