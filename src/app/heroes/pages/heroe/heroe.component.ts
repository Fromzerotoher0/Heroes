import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {switchMap} from 'rxjs/operators'
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface'; 

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
    img{
      width:100%;
      border-radius:5px;
    }
    `
  ]
})
export class HeroeComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute,private heroeS:HeroesService) { }
  heroe!:Heroe;
  ngOnInit(): void {
    this.activatedroute.
    params.
    pipe(switchMap(({id})=>this.heroeS.getheroeporid(id))).
    subscribe(heroe => this.heroe = heroe);
  }

}
