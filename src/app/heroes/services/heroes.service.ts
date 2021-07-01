import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../pages/interfaces/heroe.interface';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http:HttpClient) { 
  }

  //peticion para obtener los heroes 
  getheroes():Observable<Heroe[]>{
    return this.http.get<Heroe[]>('http://localhost:3000/heroes')
  }
}
