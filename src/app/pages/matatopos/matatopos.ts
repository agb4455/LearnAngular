import { Component, inject, OnInit } from '@angular/core';
import { MatatoposComponent } from '../../components/matatopos/matatopos';
import { HalloweenColorChange } from '../../services/halloween-color-change';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-matatopos-Page',
  imports: [MatatoposComponent, CommonModule],
  standalone: true,
  templateUrl: './matatopos.html',
  styleUrl: './matatopos.css'
})
export class MatatoposPage{
}
