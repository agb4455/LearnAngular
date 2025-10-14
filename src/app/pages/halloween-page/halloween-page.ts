import { Component } from '@angular/core';
import { ContadorTimeHallowen } from "../../components/contador-time-hallowen/contador-time-hallowen";
import { HalloweenReguisterForm } from "../../components/halloween-reguister-form/halloween-reguister-form";
import { halloweenRegistration } from '../../model/Halloween';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-halloween-page',
  imports: [ContadorTimeHallowen, HalloweenReguisterForm, MatButtonModule, MatCardModule],
  templateUrl: './halloween-page.html',
  styleUrl: './halloween-page.css'
})
export class HalloweenPage {
  showRegister:boolean = true;

  halloweenDate:Date = new Date('2025-10-31T00:00:00');
  guests:halloweenRegistration [] = [];

  addGuest(guest:halloweenRegistration){
    this.guests.push(guest);
    this.showRegister = false;
    this.showAllGuests();
    
  }

  showAllGuests(){
    for(let g of this.guests){
      console.log(g);
    }
  }

}
