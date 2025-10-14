import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-nav-bar-material',
  imports: [MatToolbarModule, RouterLink,MatButtonModule,NgFor],
  templateUrl: './nav-bar-material.html',
  styleUrl: './nav-bar-material.css'
})
export class NavBarMaterial {
  pages:String [][] = [
    ["/home","home"],
    ["/matatopos","Matatopos"],
    ["/contador", "Contador"],
    ["/semaforoA","Semaforo automatico"],
    ["/characters","Characters"],
    ["/eyeCandy", "EyeCandy"],
    ["/formTest" ,"formulario Prueba"],
    ["/halloween", "halloween"]
  ];

}
