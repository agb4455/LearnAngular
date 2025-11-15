import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { halloweenRegistration } from '../model/Halloween';
import { HalloweenColorChange } from './halloween-color-change';
import { LocalStorage } from './local-storage';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private user$:BehaviorSubject<halloweenRegistration | null> ;
  public userMode$;

  constructor(localstorage: LocalStorage){
    const guests = localstorage.getTItem<halloweenRegistration[]>('halloweenGuests');
    this.user$ = new BehaviorSubject<halloweenRegistration | null>(guests ? guests[guests.length - 1] || null : null);
    this.userMode$ = this.user$.asObservable();
  }

  setUser$(user:halloweenRegistration):void{
    this.user$?.next(user);
    this.userMode$ = this.user$.asObservable();
  }

  getUser$():Observable<halloweenRegistration | null>{
    return this.user$.asObservable();
  }
  
}
