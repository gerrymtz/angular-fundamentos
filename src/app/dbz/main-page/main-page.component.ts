import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajePredefinido: Personaje = {
    nombre: "Maestro Roshi",
    poder: 1_000
  }

  constructor() {}

}
