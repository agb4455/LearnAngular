import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CokkieService } from '../cokkie-service';
import { Achievement } from '../../../model/Achievement';
import { Observable } from 'rxjs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HalloweenColorChange } from '../../../services/halloween-color-change';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-achievements',
  imports: [CommonModule, MatTooltipModule, TranslateModule],
  templateUrl: './achievements.html',
  styleUrl: './achievements.scss',
})
export class AchievementsComponent {
  private cokkieService = inject(CokkieService);
  public themeService = inject(HalloweenColorChange);

  achievements$: Observable<Achievement[]>;

  constructor() {
    this.achievements$ = this.cokkieService.getAchievements$();
  }
}
