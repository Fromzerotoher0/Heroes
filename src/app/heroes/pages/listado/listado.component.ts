import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface'; 

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  //llamado del servicio de heroes
  constructor(private heroeservice:HeroesService) { }
   
  heroes!:Heroe[];
  ngOnInit(): void {
    //peticion para almacenar los heroes en "heroes!"
    this.heroeservice.getheroes().subscribe(resp => 
      {
        this.heroes=resp
      });
  }

}
