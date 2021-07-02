import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroe.interface'; 
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino:string="";
  heroes:Heroe[]=[]; 
  heroeseleccionado!:Heroe;
  constructor(private HeroeS:HeroesService) { }

  ngOnInit(): void {
  }
  buscando(){
  this.HeroeS.getautocomplete(this.termino).subscribe(heroes => this.heroes = heroes)
  }
  seleccion(event:MatAutocompleteSelectedEvent){
    if(!event.option.value){
      console.log('no hay ningun valor')
      return;
    }
    const heroe:Heroe= event.option.value;
    this.termino = heroe.superhero;

    this.HeroeS.getheroeporid(heroe.id!).subscribe(heroe => this.heroeseleccionado = heroe)
  }

}
