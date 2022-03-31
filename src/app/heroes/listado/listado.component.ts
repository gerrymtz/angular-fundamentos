import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ["Spider man", "Iron man", "Hulk", "Thor", "Ant man", "Captain America"];
  heroeEliminado: string = "";
  mensaje: string = "No hay más heroes por mostrar.";

  borrarHeroe(): void {
    if (this.heroes.length > 0) {
      this.heroeEliminado = this.heroes.pop() || "";
    }
  }

  reiniciar(): void {
    this.heroes = ["Spider man", "Iron man", "Hulk", "Thor", "Ant man", "Captain America"];
    this.heroeEliminado = "";
  }

}