import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface'; 

@Component({
  selector: 'app-heroe-targeta',
  templateUrl: './heroe-targeta.component.html',
  styles: [
    `
    mat-card{
      margin-top:20px;
      
    }
    `
  ]
})
export class HeroeTargetaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //input para recibir los datos del listado de heroes
  @Input() heroe!:Heroe;

}
