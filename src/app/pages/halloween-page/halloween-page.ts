import { Component } from '@angular/core';
import { ContadorTimeHallowen } from "../../components/contador-time-hallowen/contador-time-hallowen";
import { HalloweenReguisterForm } from "../../components/halloween-reguister-form/halloween-reguister-form";
import { halloweenRegistration } from '../../model/Halloween';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { LocalStorage } from '../../services/local-storage';

@Component({
  selector: 'app-halloween-page',
  imports: [MatTableModule,CommonModule, MatListModule, ContadorTimeHallowen, HalloweenReguisterForm, MatButtonModule, MatCardModule],
  templateUrl: './halloween-page.html',
  styleUrl: './halloween-page.scss'
})
export class HalloweenPage {

  constructor(private localstorage:LocalStorage) {
   this.guests = this.localstorage.getTItem<halloweenRegistration[]>('halloweenGuests') as halloweenRegistration[] || [];
  }

  showRegister:boolean = true;
  displayedColumns: string[] = ['nombre','mounstruo'];

  halloweenDate:Date = new Date('2025-10-31T00:00:00');
  pasedDate:Date = new Date('2025-11-1T00:00:00');
  guests:halloweenRegistration [];

  addGuest(guest:halloweenRegistration){
    this.guests.push(guest);
    this.showRegister = false;
    this.showAllGuests();
    this.saveGuests();
    
  }

  showAllGuests(){
    for(let g of this.guests){
      console.log(g);
    }
  }

  saveGuests(){
    this.localstorage.setTItem<halloweenRegistration[]>('halloweenGuests', this.guests);
  }

}
