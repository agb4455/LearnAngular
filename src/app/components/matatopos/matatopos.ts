import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-matatopos',
  imports: [NgFor],
  templateUrl: './matatopos.html',
  styleUrl: './matatopos.css'
})
export class Matatopos {
  topos:number[][] = [[1,2,3],[4,5,6],[7,8,9]];
}
