import {Component} from "@angular/core";


@Component({
    selector: "app-contador",
    template: `
        <main class="container">
            <h1 class="title"> {{titulo}} </h1>

            <section class="counter">
                <button type="button" (click)="sumarContador()">+ {{base}}</button>
            
                <p class="counter__text">La base es: {{sumatoria}}</p>
            
                <button type="button" (click)="restarContador()">- {{base}}</button>
            </section>
            
            <button type="button" class="btn__reset" (click)="reiniciarContador()">Reiniciar</button>
        </main>
    `
})
export class ContadorComponent {

    titulo: string = 'Contador App';
    base: number = 5;
    sumatoria: number = this.base;
  
    sumarContador(): void {
      this.sumatoria += this.base;
    }
  
    restarContador(): void {
      if (this.sumatoria > 0) {
        this.sumatoria -= this.base;
      }
    }
  
    reiniciarContador(): void {
      this.sumatoria = this.base;
    }

}