import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {
}



