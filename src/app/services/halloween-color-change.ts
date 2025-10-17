import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HalloweenColorChange {
  // Variable de color o tema actual
  private halloweenModeSubject = new BehaviorSubject<boolean>(false);
  halloweenMode$ = this.halloweenModeSubject.asObservable();


  
  get backgroundColor(): string {
    return this.halloweenModeSubject.value ? '#222' : '#fff';
  }

  get textColor(): string {
    return this.halloweenModeSubject.value ? '#fff' : '#000';
  }

  toggleDarkMode() {
    this.halloweenModeSubject.next(!this.halloweenModeSubject.value);
  }

  setDarkMode(value: boolean) {
    this.halloweenModeSubject.next(value);
  }

  isDarkMode(): boolean {
    return this.halloweenModeSubject.value;
  }
  
}
