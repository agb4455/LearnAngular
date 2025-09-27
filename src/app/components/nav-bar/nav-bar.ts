import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink,MatButtonModule,NgFor],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  pages:String [][] = [
    ["/home","home"],
    ["/matatopos","Matatopos"],
    ["/contador", "Contador"],
    ["/semaforoA","Semaforo automatico"]];

}
