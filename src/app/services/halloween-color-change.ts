import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { halloweenRegistration } from '../model/Halloween';

@Injectable({
  providedIn: 'root'
})

export class HalloweenColorChange {

  //temas en forma de array de String
  halloweenTheme:String [] = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ];

  normalTheme:String [] = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ];

  christmasTheme:String [] = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ];



  
  // Variable de color o tema actual
  private halloweenModeSubject = new BehaviorSubject<boolean>(false);

  halloweenMode$ = this.halloweenModeSubject.asObservable();


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

  toggleDarkMode() {
    this.halloweenModeSubject.next(!this.halloweenModeSubject.value);
    this.setHalloweenTheme();
  }

  setDarkMode(value: boolean) {
    this.halloweenModeSubject.next(value);
  }

  isDarkMode(): boolean {
    return this.halloweenModeSubject.value;
  }
  
}
