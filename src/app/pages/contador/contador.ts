import { Component } from '@angular/core';
import { ContadorComponent } from "../../components/contador/contador";

@Component({
  selector: 'app-contador-page',
  imports: [ContadorComponent],
  templateUrl: './contador.html',
  styleUrl: './contador.css',
  standalone: true
})
export class ContadorPage {

}
