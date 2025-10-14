import { Component, Input, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-contador-time-hallowen',
  imports: [MatCardModule],
  templateUrl: './contador-time-hallowen.html',
  styleUrl: './contador-time-hallowen.css'
})
export class ContadorTimeHallowen {
  @Input() targetDate?: Date;

  remainingTime: string = '';

  private subscription?: Subscription;

  rTime:String [] = ['0',":",'0',":",'0',":","0"];
  current:boolean = true;

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
        try {
          this.rTime = this.formatTime(ms);
        } catch (error) {
          this.current = false;
        }
        
      });
  }

  private formatTime(ms: number): String []{
    if(ms > 0){
      const totalSeconds = Math.floor(ms / 1000);
      const days = Math.floor(totalSeconds / 86400)
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor(((totalSeconds % 86400) % 3600) / 60);
      const seconds = totalSeconds % 60;
      return [days + 'd ',' - ',hours + ' h ',':',minutes + ' min ',':',seconds + ' seg'];
    }else{
      throw new Error("se Termino");
    }
  }

  private pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  

}
