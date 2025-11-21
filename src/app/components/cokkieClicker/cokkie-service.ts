import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Upgrade } from '../../model/UpgradeCokkie';

@Injectable({
  providedIn: 'root',
})

export class CokkieService {
  static getUpgradeNumber() {
    throw new Error('Method not implemented.');
  }

  public static readonly UpgradeList:Upgrade[] = [
    new Upgrade("Cursores", 1, ""),
    new Upgrade("Abuelas", 5, ""),
    new Upgrade("Fábricas", 10, ""),
    new Upgrade("Minas", 20, ""),
    new Upgrade("Robots", 50, ""),
    new Upgrade("Científicos", 100, ""),
    new Upgrade("Universidades", 500, ""),
    new Upgrade("Laboratorios", 1000, ""),
    new Upgrade("Colonias Espaciales", 5000, ""),
    new Upgrade("Inteligencia Artificial", 10000, "")
  ];

  private cokies:BehaviorSubject<number>;
  private cokiesPerSeconth:BehaviorSubject<number>;
  private upgrades:BehaviorSubject<Map<Upgrade,number>>;

  private cookies$;
  private cokiesPerSeconth$;

  

  constructor(){
    this.cokies = new BehaviorSubject<number>(0);
    this.cokiesPerSeconth = new BehaviorSubject<number>(0);
    this.upgrades = new BehaviorSubject<Map<Upgrade,number>>(new Map<Upgrade,number>());

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

  getUpgrades():Map<Upgrade,number>{
    return new Map(this.upgrades.value);
  }

  addUpgrade(upgrade: Upgrade) {
    const current = this.upgrades.value;

    let existingKey: Upgrade | undefined;

    current.forEach((value, key) => {
      if (key.name === upgrade.name) {
        existingKey = key;
      }
    });

    if (existingKey) {
      const currentValue = current.get(existingKey) ?? 0;
      current.set(existingKey, currentValue + 1);
    } else {
      current.set(upgrade, 1);
    }

    this.upgrades.next(new Map(current));
  }

  getUpgradeNumber(u : Upgrade):number{
    const current = this.upgrades.value;

    let existingKey: number | undefined;

    current.forEach((value, key) => {
      if (key.name === u.name) {
        existingKey = value;
      }
    });

    if (existingKey) {
      return existingKey;
    } 

    return -1;
  }
  
}
