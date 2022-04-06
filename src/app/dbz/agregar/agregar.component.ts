import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input()
  personajesDBZ: Personaje[] = [];

  @Input()
  nuevoPersonaje: Personaje = {
    nombre: "",
    poder: 0
  }

  enviarDatos(): void {
    
    if (this.nuevoPersonaje.nombre.trim().length === 0) {
      return;
    }
    this.personajesDBZ.push(this.nuevoPersonaje);

    this.nuevoPersonaje = {
      nombre: "",
      poder: 0
    }

  }

}
