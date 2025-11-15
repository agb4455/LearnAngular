import { Component, inject, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NgClass, NgFor } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ColorTheme, HalloweenColorChange, themesSelector } from '../../services/halloween-color-change';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { RouterLink } from '@angular/router';
import { Color } from 'chart.js';
import { Subscription } from 'rxjs';
import { Input } from '@angular/core';
import { MatIcon, MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';
import { LocalStorage } from '../../services/local-storage';
import {MatMenuModule} from '@angular/material/menu';
import { UserService } from '../../services/user-service';


@Component({
  selector: 'app-nav-bar-material',
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    NgClass,
    MatButtonToggleModule,
    RouterLink,
    MatIcon,
    MatMenuModule
],
  templateUrl: './nav-bar-material.html',
  styleUrls: ['./nav-bar-material.css', './nav-bar-material.scss'],
})
export class NavBarMaterial  implements OnInit{
  @Input() type: number = 0; // 0 for top nav, 1 for side nav

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
    ["/grafic", "grafic"],
    ["/chat", "chat"]
  ];
  
  themes = Object.values(themesSelector);

  readonly themesSelector = themesSelector;

  ColorTheme : themesSelector = this.themesSelector.NORMAL;
  actName : String = "USUARIO";

  private sub?: Subscription;
  private userSubscription?: Subscription;

  constructor(private ColorChange: HalloweenColorChange,private localstorage:LocalStorage, private users:UserService) {
    this.userSubscription = this.users.userMode$.subscribe(nameUser => {
      if(nameUser != null){
        this.actName = nameUser.name;
      }
    });
  }

  ngOnInit() {
    this.ColorChange.themeMode$.subscribe(value => {
      this.ColorTheme = value;
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.userSubscription?.unsubscribe();
  }

  toggleTheme(ColorTheme:themesSelector) {
    this.ColorTheme = ColorTheme;
    this.ColorChange.setColorTheme(ColorTheme);
    console.log("Theme changed to:", ColorTheme);
  }




}
