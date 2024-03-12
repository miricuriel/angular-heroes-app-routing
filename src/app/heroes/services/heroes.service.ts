import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

import { Hero } from '../interfaces/hero.interface';
import { environments } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class HeroesService {

  // Crear constante de manera privada que
  // viene desde mi enviroments
  private baseUrl: string = environments.baseUrl;


  constructor(private http: HttpClient) { }


  getHeroes():Observable<Hero[]> {
    // Uso la peticion get y le asigno el path
    return this.http.get<Hero[]>(`${ this.baseUrl }/heroes`);
  }

  // Obtener heroe por id en base a la url
  getHeroById( id: string ): Observable<Hero|undefined> {
    return this.http.get<Hero>(`${ this.baseUrl }/heroes/${ id }`)
      .pipe(
        catchError( error => of(undefined) )
      );
  }

  // getSuggestions( query: string ): Observable<Hero[]> {
  //   return this.http.get<Hero[]>(`${ this.baseUrl }/heroes?q=${ query }&_limit=6`);
  // }



}
