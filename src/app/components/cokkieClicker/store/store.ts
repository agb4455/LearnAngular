import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {CokkieService} from '../cokkie-service';
import { Upgrade } from '../../../model/UpgradeCokkie';

@Component({
  selector: 'app-store',
  imports: [
    MatCardModule
  ],
  templateUrl: './store.html',
  styleUrl: './store.scss',
})
export class Store {

  public readonly upgradeList:Upgrade[] = CokkieService.UpgradeList;


  constructor(public cokkieService : CokkieService){}

  getUpgradeCount(u:Upgrade):number{
    n:number = CokkieService.getUpgradeNumber(u);
  }

}
