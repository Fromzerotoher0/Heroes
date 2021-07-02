import { Component, OnInit } from '@angular/core';
import { Heroe ,Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
    img{
      width:100%;
      border-radius:5px;
    }
    `
  ]
})
export class AgregarComponent implements OnInit {

  constructor(private heroeS:HeroesService, 
              private ActivatedRoute:ActivatedRoute,
              private router:Router ,
              private _snackbar:MatSnackBar,
              private matdialog:MatDialog) { }
  
  publishers= [ 
    {id:'Dc Comics',
    desc:'Dc - Comics'},
    {id:'Marvel Comics',
    desc:'Marvel - Comics'}]


    heroe:Heroe= 
    {
    superhero:'',
    publisher:Publisher.DCComics,
    alter_ego:'',
    first_appearance:'',
    characters:'',
    alt_img:'',
      }
      
  ngOnInit(): void {
    if(!this.router.url.includes('editar')){
      return;
    }else{
      this.ActivatedRoute.params.pipe(switchMap(({id})=>this.heroeS.getheroeporid(id)))
      .subscribe(heroe => this.heroe = heroe )
    }
  }

  guardar(){
    if(this.heroe.superhero.trim().length === 0){
      return;
    }

    if(this.heroe.id){
      //actualizar
      this.heroeS.editarheroe(this.heroe).subscribe(resp =>console.log('actualizado',resp))
      this.mostrarSnakbar('Registro Actualizado')
    }else{
      this.heroeS.agregarheroe(this.heroe).subscribe(resp => this.router.navigate( ['/heroes/editar',resp.id] ))
      this.mostrarSnakbar('Registro Creado')
    }
  }
  borrar(){
      
     const dialog =  this.matdialog.open(ConfirmarComponent,{width:'250px',data:this.heroe})
     dialog.afterClosed().subscribe(result => {if(result == true){
      this.heroeS.borrarheroe(this.heroe.id!).subscribe(resp => {this.router.navigate( ['/heroes'] )})
     }});
      
  }

  mostrarSnakbar(mensaje:string){
    this._snackbar.open(mensaje,'cerrar',{
      duration:2500
    });
  }
}
