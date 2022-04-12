import {Injectable} from '@angular/core';
import {Personaje} from '../interfaces/dbz.interface'


@Injectable()
export class DbzService {

  	constructor() {
		console.log("Servicio inicializado");
  	}

}