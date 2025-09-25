import { NgFor, NgIf } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';


@Component({
  selector: 'app-matatopos',
  imports: [NgFor, NgIf],
  templateUrl: './matatopos.html',
  styleUrl: './matatopos.css'
})
export class Matatopos {
  topos:number[][] = [[1,2,3],[4,5,6],[7,8,9]];
  
  activo:number = 4;

  randomizar(btn:number){
    if(btn === this.activo){
      this.activo = Math.floor(Math.random() * 9);
      console.log(this.activo);
    }
  }

  ngOnInit(){
    this.randomizar(this.activo);
  }
}
