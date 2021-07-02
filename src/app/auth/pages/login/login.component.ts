import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { auth } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent  {

  constructor(private router:Router,
              private loginS:AuthService) { }


login(){
  this.loginS.login().subscribe(resp => {if(resp.id){
    this.router.navigate(['./heroes'])
  }})
}

}
