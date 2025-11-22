import { Component } from '@angular/core';
import { Store } from "../../components/cokkieClicker/store/store";
import { CokieClicker } from "../../components/cokkieClicker/cokie-clicker/cokie-clicker";
import { AchievementsComponent } from "../../components/cokkieClicker/achievements/achievements";

@Component({
  selector: 'app-cokkie-clicker',
  imports: [Store, CokieClicker, AchievementsComponent],
  templateUrl: './cokkie-clicker.html',
  styleUrl: './cokkie-clicker.scss',
})
export class CokkieClicker {

}
