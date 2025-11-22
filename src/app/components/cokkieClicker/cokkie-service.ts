import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Upgrade } from '../../model/UpgradeCokkie';

@Injectable({
  providedIn: 'root',
})

export class CokkieService {

  public static readonly UpgradeList: Upgrade[] = [
    new Upgrade("Cursores", 1, "", 15),
    new Upgrade("Abuelas", 5, "", 100),
    new Upgrade("Fábricas", 10, "", 500),
    new Upgrade("Minas", 20, "", 2000),
    new Upgrade("Robots", 50, "", 7000),
    new Upgrade("Científicos", 100, "", 50000),
    new Upgrade("Universidades", 500, "", 1000000),
    new Upgrade("Laboratorios", 1000, "", 123456789),
    new Upgrade("Colonias Espaciales", 5000, "", 999999999),
    new Upgrade("Inteligencia Artificial", 10000, "", 9999999999)
  ];

  private cokies: BehaviorSubject<number>;
  private cokiesPerSeconth: BehaviorSubject<number>;
  private upgrades: BehaviorSubject<Map<Upgrade, number>>;

  private cookies$;
  private cokiesPerSeconth$;



  constructor() {
    this.cokies = new BehaviorSubject<number>(0);
    this.cokiesPerSeconth = new BehaviorSubject<number>(0);

    let map = new Map<Upgrade, number>();
    CokkieService.UpgradeList.forEach(upgrade => {
      map.set(upgrade, 0);
    });

    this.upgrades = new BehaviorSubject<Map<Upgrade, number>>(map);

    this.cookies$ = this.cokies.asObservable();
    this.cokiesPerSeconth$ = this.cokiesPerSeconth.asObservable();

  }

  async push() {
    this.cokies.next(this.cokies.value + 1);
  }

  getCokies$(): Observable<number> {
    return this.cookies$;
  }

  getCokkiesPerSecoth(): Observable<number> {
    return this.cokiesPerSeconth$;
  }

  async setCookiesPerSeconth() {
    this.cokies.next(this.cokies.value + this.cokiesPerSeconth.value);
  }

  getUpgrades(): Map<Upgrade, number> {
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
      current.set(upgrade, 0);
      console.log("Upgrade added: " + upgrade.name);
    }

    this.upgrades.next(new Map(current));
  }

  getUpgradeNumber(u: Upgrade): number {
    const current = this.upgrades.value;

    let foundValue: number | undefined;

    current.forEach((value, key) => {
      if (key.name === u.name) {
        foundValue = value;
      }
    });

    if (foundValue !== undefined) {
      return foundValue;
    }

    return -1;
  }

}
