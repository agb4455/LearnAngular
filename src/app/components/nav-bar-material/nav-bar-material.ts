import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ColorTheme, HalloweenColorChange, themesSelector } from '../../services/halloween-color-change';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { RouterLink } from '@angular/router';
import { Color } from 'chart.js';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-nav-bar-material',
  imports: [
    CommonModule,
    FormsModule, 
    MatSlideToggleModule, 
    MatToolbarModule, 
    MatButtonModule, 
    NgFor, 
    NgStyle,
    MatButtonToggleModule,
    RouterLink
  ],
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
    ["/kanban", "kanban"],
    ["/grafic", "grafic"]
  ];
  
  themes = Object.values(themesSelector).filter(v => typeof v === 'number') as themesSelector[];

  readonly themesSelector = themesSelector;

  ColorTheme : themesSelector = themesSelector.NORMAL;

  private sub?: Subscription;

  constructor(public ColorChange: HalloweenColorChange) {}

  ngOnInit() {
    this.ColorChange.themeMode$.subscribe(value => {
      this.ColorTheme = value;
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  toggleTheme(ColorTheme:themesSelector) {
    this.ColorTheme = ColorTheme;
    this.ColorChange.setColorTheme(ColorTheme);
    console.log("Theme changed to:", ColorTheme);
  }

}
