import { Component } from '@angular/core';
import { ContadorTimeHallowen } from "../../components/contador-time-hallowen/contador-time-hallowen";
import { HalloweenReguisterForm } from "../../components/halloween-reguister-form/halloween-reguister-form";

@Component({
  selector: 'app-halloween-page',
  imports: [ContadorTimeHallowen, HalloweenReguisterForm],
  templateUrl: './halloween-page.html',
  styleUrl: './halloween-page.css'
})
export class HalloweenPage {

  halloweenDate:Date = new Date('2025-10-31T00:00:00');

}
