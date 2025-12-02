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
  achievementsOpen = false;
  storeOpen = false;

  toggleAchievements() {
    this.achievementsOpen = !this.achievementsOpen;
    if (this.achievementsOpen) {
      this.storeOpen = false;
    }
  }

  toggleStore() {
    this.storeOpen = !this.storeOpen;
    if (this.storeOpen) {
      this.achievementsOpen = false;
    }
  }

  closeAll() {
    this.achievementsOpen = false;
    this.storeOpen = false;
  }
}
