import { Component, Input, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-contador-time-hallowen',
  imports: [],
  templateUrl: './contador-time-hallowen.html',
  styleUrl: './contador-time-hallowen.css'
})
export class ContadorTimeHallowen {
  @Input() targetDate?: Date;

  remainingTime: string = '';

  private subscription?: Subscription;

  ngOnInit() {
    let endTime: number;

    if (this.targetDate) {
      endTime = this.targetDate.getTime();
    } else {
      throw new Error('Debe especificar targetDate o seconds');
    }

    this.subscription = interval(1000)
      .pipe(
        map(() => Math.max(0, endTime - Date.now())),
        takeWhile(ms => ms > 0, true)
      )
      .subscribe(ms => {
        this.remainingTime = this.formatTime(ms);
      });
  }

  private formatTime(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / 86400)
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor(((totalSeconds % 86400) % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${this.pad(days)}:${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  private pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  

}
