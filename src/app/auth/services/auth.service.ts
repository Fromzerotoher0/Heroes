import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _auth:auth | undefined;
  constructor(private http:HttpClient) { }

  verificarautenticacion():Observable<boolean>{
    if(!localStorage.getItem('token')){
      return of(false);
    }

    return this.http.get<auth>('http://localhost:3000/usuarios/1').pipe(
      map(auth => {
        this._auth=auth;
        return true;
      })
    )
    

  }
  get auth():auth{
    return {...this._auth!}
  }
  login(){
    return this.http.get<auth>('http://localhost:3000/usuarios/1')
    .pipe(tap(resp => this._auth = resp),
    tap(resp => localStorage.setItem('token',resp.usuario) ))
  }
  logout(){
    this._auth = undefined;
  }
}

