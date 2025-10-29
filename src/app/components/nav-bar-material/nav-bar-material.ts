import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HalloweenColorChange } from '../../services/halloween-color-change';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-nav-bar-material',
  imports: [CommonModule,FormsModule, MatSlideToggleModule, MatToolbarModule, RouterLink, MatButtonModule, NgFor, NgStyle],
  templateUrl: './nav-bar-material.html',
  styleUrls: ['./nav-bar-material.css', './nav-bar-material.scss'],
})
export class NavBarMaterial  implements OnInit{
  pages:String [][] = [
    ["/home","home"],
    ["/matatopos","Matatopos"],
    ["/contador", "Contador"],
    ["/semaforoA","Semaforo automatico"],
    ["/characters","Characters"],
    ["/eyeCandy", "EyeCandy"],
    ["/formTest" ,"formulario Prueba"],
    ["/halloween", "halloween"],
    ["/kanban", "kanban"]
  ];

  isDark: boolean = false;

  constructor(public halloweenColorChange: HalloweenColorChange) {}

  ngOnInit() {
    this.halloweenColorChange.halloweenMode$.subscribe(value => {
      this.isDark = value;
    });
  }

  toggleTheme() {
    this.halloweenColorChange.toggleDarkMode();
  }

}
