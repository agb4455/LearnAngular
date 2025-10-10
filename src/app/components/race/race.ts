import { Component } from '@angular/core';
import { NgFor } from "@angular/common";

@Component({
  selector: 'app-race',
  imports: [NgFor],
  templateUrl: './race.html',
  styleUrl: './race.css'
})
export class Race {
  personajes:{path:string}[] = [];
}
