import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroe.interface';


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

  getheroeporid(id:string):Observable<Heroe>{
    return this.http.get<Heroe>(`http://localhost:3000/heroes/${id}`)
  }

  getautocomplete(termino:string):Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`http://localhost:3000/heroes?q=${termino}&_limit=6`);
  }
  agregarheroe(heroe:Heroe):Observable<Heroe>{
  return this.http.post<Heroe>('http://localhost:3000/heroes',heroe);
  }
  editarheroe(heroe:Heroe):Observable<Heroe>{
    return this.http.put<Heroe>(`http://localhost:3000/heroes/${heroe.id}`,heroe);
    }
  borrarheroe(id:string):Observable<any>{
  return this.http.delete<any>(`http://localhost:3000/heroes/${id}`);

    }
}
