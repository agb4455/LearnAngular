import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HalloweenColorChange {

  //temas en forma de array de String
  halloweenTheme:ColorTheme = new ColorTheme(
    themesSelector.HALLOWEEN,
    "#2b1d0e",
    "#f8d98a",
    "#ff7518",
    "#5b2c6f",
    "#FF7518",
    "#3A1F0E",
    "#5B2C6F",
    "#F8D98A",
    "#F8D98A",
    "#5B2C6F",
    "#3D1A4D",
    "#F8D98A"
  );

  normalTheme:ColorTheme = new ColorTheme(
    themesSelector.NORMAL,
    "#ffffff",
    "#000000",
    "#007acc",
    "#e0e0e0",
    "#007acc",
    "#e0e0e0",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#fff",
    "#000"
  );

  christmasTheme:ColorTheme = new ColorTheme(
    themesSelector.CHRISTMAS,
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  );


  
  // Variable de color o tema actual
  private activeTheme = new BehaviorSubject<themesSelector>(themesSelector.NORMAL);

  themeMode$ = this.activeTheme.asObservable();

  setTheme(){
    switch(this.activeTheme.value){
      case themesSelector.NORMAL:
        this.cahngeTheme(this.normalTheme);
        break;
      case themesSelector.HALLOWEEN:
        this.cahngeTheme(this.halloweenTheme);
        break;
      case themesSelector.CHRISTMAS:
        this.cahngeTheme(this.christmasTheme);
        break;
    }
  }

  cahngeTheme(theme: ColorTheme){
    const root = document.documentElement;

    //colores generales
    root.style.setProperty('--background-color',theme.backgroundColor);
    root.style.setProperty('--text-color',theme.textColor);
    root.style.setProperty('--accent-color',theme.accentColor);
    root.style.setProperty('--secundary-color', theme.secondaryColor);

    //navBar
    root.style.setProperty('--nav-bar-hover-color', theme.navBarHoverColor );
    root.style.setProperty('--nav-bar-background-color', theme.navBarBackgroundColor);
    root.style.setProperty('--nav-bar-text-color', theme.navBarTextColor);

    //mat-card
    root.style.setProperty('--card-background-color', theme.cardBackgroundColor);
    root.style.setProperty('--card-border-color', theme.cardBorderColor);
    root.style.setProperty('--card-text-color', theme.cardTextColor);

    //form
    root.style.setProperty('--form-text-color', theme.formTextColor);
    root.style.setProperty('--form-border-color', theme.formBorderColor);
  }

  currentTheme(): themesSelector {
    return this.activeTheme.value;
  }

  setColorTheme(ColorTheme: themesSelector) {
    this.activeTheme.next(ColorTheme);
    this.setTheme();
  } 
}

export enum themesSelector{
  NORMAL = 0,
  HALLOWEEN = 1,
  CHRISTMAS = 2,
}

export class ColorTheme{
  theme:themesSelector;

  backgroundColor : string;
  textColor : string;
  accentColor : string;
  secondaryColor : string;

  navBarHoverColor : string;

  cardBackgroundColor : string;
  cardBorderColor : string;
  cardTextColor : string;

  formTextColor : string;
  formBorderColor : string;
  navBarBackgroundColor : string;
  navBarTextColor : string;

  constructor(
    theme:themesSelector,
    backgroundColor: string,
    textColor: string,
    accentColor: string,
    secondaryColor: string,
    navBarHoverColor: string,
    cardBackgroundColor: string,
    cardBorderColor: string,
    cardTextColor: string,
    formTextColor: string,
    formBorderColor: string,
    navBarBackgroundColor : string,
    navBarTextColor : string,
  ){
    this.theme = theme;
    this.backgroundColor = backgroundColor;
    this.textColor = textColor;
    this.accentColor = accentColor;
    this.secondaryColor = secondaryColor;
    this.navBarHoverColor = navBarHoverColor;
    this.cardBackgroundColor = cardBackgroundColor;
    this.cardBorderColor = cardBorderColor;
    this.cardTextColor = cardTextColor;
    this.formTextColor = formTextColor;
    this.formBorderColor = formBorderColor;
    this.navBarBackgroundColor = navBarBackgroundColor;
    this.navBarTextColor = navBarTextColor;
  }
}

//deprecado

/**
  setHalloweenTheme(){
    const root = document.documentElement;

    //colores generales
    root.style.setProperty('--background-color',this.backgroundColor);
    root.style.setProperty('--text-color',this.textColor);
    root.style.setProperty('--accent-color',this.accentColor);
    root.style.setProperty('--secundary-color', this.secondaryColor);

    //navBar
    root.style.setProperty('--nav-bar-hover-color', this.navBarHoverColor );

    //mat-card
    root.style.setProperty('--card-background-color', this.halloweenModeSubject.value ? '#3A1F0E' : '#e0e0e0');
    root.style.setProperty('--card-border-color', this.halloweenModeSubject.value ? '#5B2C6F' : '#000000');
    root.style.setProperty('--card-text-color', this.halloweenModeSubject.value ? '#F8D98A' : '#000000');

    root.style.setProperty('--form-text-color', this.halloweenModeSubject.value ? '#F8D98A' : '#000000');
    root.style.setProperty('--form-border-color', this.halloweenModeSubject.value ? '#5B2C6F' : '#000000');

  }

  get navBarHoverColor(): string{
    return this.halloweenModeSubject.value ? '#FF7518' : '#007acc';
  }

  get navBarBackgroundColor(): string{
    return this.halloweenModeSubject.value ? '#3D1A4D' : '#ffffff';
  }

  get navBarTextColor() : string {
    return this.halloweenModeSubject.value ? '#F8D98A' : '#000000';
  }
  
  get backgroundColor(): string {
    return this.halloweenModeSubject.value ? '#2b1d0e' : '#ffffff';
  }
  
  get textColor(): string {
    return this.halloweenModeSubject.value ? '#f8d98a' : '#000000';
  }
  
  get accentColor(): string {
    return this.halloweenModeSubject.value ? '#ff7518' : '#007acc';
  }
  
  get secondaryColor(): string {
    return this.halloweenModeSubject.value ? '#5b2c6f' : '#e0e0e0'; // violeta oscuro
  }
  */
