import { Component } from '@angular/core';
import { CokkieService } from '../cokkie-service';
import { Upgrade } from '../../../model/UpgradeCokkie';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { MatTabsModule } from '@angular/material/tabs';
import { HalloweenColorChange } from '../../../services/halloween-color-change';
import { inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-store',
  imports: [CommonModule, MatTabsModule, TranslateModule],
  templateUrl: './store.html',
  styleUrl: './store.scss',
})
export class Store {

  readonly cokkieService: CokkieService;
  public themeService = inject(HalloweenColorChange);
  public readonly upgradeList: Upgrade[] = CokkieService.UpgradeList;
  codes$: Observable<number>;

  activeTabIndex: number = 0;

  constructor(cokkieService: CokkieService) {
    this.cokkieService = cokkieService;
    this.codes$ = cokkieService.getCokies$();
  }

  get productionUpgrades(): Upgrade[] {
    return this.upgradeList.filter(u => u.cokPerSec > 0);
  }

  get clickUpgrades(): Upgrade[] {
    return this.upgradeList.filter(u => u.clickBonus > 0);
  }

  getUpgradeCount(u: Upgrade): number {
    let n: number = this.cokkieService.getUpgradeNumber(u);
    return n;
  }

  purchaseUpgrade(upgrade: Upgrade) {
    this.cokkieService.purchaseUpgrade(upgrade);
  }

  canAfford(upgrade: Upgrade): boolean {
    return this.cokkieService.canAfford(upgrade);
  }

}
