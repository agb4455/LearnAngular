import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class CokkieService {

  private cokies:BehaviorSubject<number>;
  private cokiesPerSeconth:BehaviorSubject<number>;

  private cookies$;
  private cokiesPerSeconth$;

  constructor(){
    this.cokies = new BehaviorSubject<number>(0);
    this.cokiesPerSeconth = new BehaviorSubject<number>(0);

    this.cookies$ = this.cokies.asObservable();
    this.cokiesPerSeconth$ = this.cokiesPerSeconth.asObservable();
  }

  async push(){
    this.cokies.next(this.cokies.value + 1);
  }

  getCokies$():Observable<number>{
    return this.cookies$;
  }

  getCokkiesPerSecoth():Observable<number>{
    return this.cokiesPerSeconth$;
  }

  async setCookiesPerSeconth(){
    this.cokies.next(this.cokies.value + this.cokiesPerSeconth.value);
  }

  
  
}
