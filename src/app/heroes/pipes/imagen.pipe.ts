import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'imagen',
  pure: false,
})
export class ImagenPipe implements PipeTransform {

  transform(Heroe:Heroe): String {
    if(!Heroe.id && !Heroe.alt_img ){
    return `assets/no-image.png`;
    }else if(Heroe.alt_img){
      return Heroe.alt_img;
    }else{
      return `assets/heroes/${Heroe.id}.jpg`;
    }
  }

}
