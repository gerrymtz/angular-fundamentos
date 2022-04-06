import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajesDBZ: Personaje[] = [
    {
      nombre: "Goku",
      poder: 15_000
    },
    {
      nombre: "Vegeta",
      poder: 12_500
    }
  ];

  nuevoPersonaje: Personaje = {
    nombre: "Maestro Roshi",
    poder: 1_000
  }

}
