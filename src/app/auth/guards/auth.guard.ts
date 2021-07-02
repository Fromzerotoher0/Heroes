import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, } from '@angular/router';
import { Observable , of} from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad,CanActivate {

constructor(private AuthService:AuthService,
  private router:Router){

}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean > | boolean  {

      return  this.AuthService.verificarautenticacion()
      .pipe(tap(autenticado => {
        if(!autenticado){
          this.router.navigate(['./auth/login'])
        }
      }))
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean >  | boolean {
     
      return  this.AuthService.verificarautenticacion()
      .pipe(tap(autenticado => {
        if(!autenticado){
          this.router.navigate(['./auth/login'])
        }
      }))
     // if(this.AuthService.auth.id){
       // return true;
      //}else{
        //console.log('bloqueado por el authguard - canLoad')
        //return false;

      //}
    
  }
}
