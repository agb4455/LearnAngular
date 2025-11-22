import { Component } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'contador-component',
  imports: [TranslateModule],
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class ContadorComponent {

  numero: number = 0;

  incrementar() {
    this.numero++;
  }

  decrementar() {
    this.numero--;
  }

  reset() {
    this.numero = 0;
  }

}
