import {Injectable} from '@angular/core';
import {Personaje} from '../interfaces/dbz.interface';


@Injectable()
export class DbzService {

	private _personajesDBZ: Personaje[] = [
		{
		nombre: "Goku",
			poder: 15_000
		},
		{
		nombre: "Vegeta",
			poder: 12_500
		}
	];

	constructor() {}

	get obtenerPersonajes(): Personaje[] {
		return [...this._personajesDBZ];
	}

	agregarPersonaje(personaje: Personaje): void {
		this._personajesDBZ.push(personaje);
	}

}