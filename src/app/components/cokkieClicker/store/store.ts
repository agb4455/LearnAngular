import { Component } from '@angular/core';
import { CokkieService } from '../cokkie-service';
import { Upgrade } from '../../../model/UpgradeCokkie';

@Component({
  selector: 'app-store',
  imports: [
  ],
  templateUrl: './store.html',
  styleUrl: './store.scss',
})
export class Store {

  readonly cokkieService: CokkieService;

  public readonly upgradeList: Upgrade[] = CokkieService.UpgradeList;


  constructor(cokkieService: CokkieService) {
    this.cokkieService = cokkieService;
  }

  getUpgradeCount(u: Upgrade): number {
    let n: number = this.cokkieService.getUpgradeNumber(u);
    return n;
  }

}
