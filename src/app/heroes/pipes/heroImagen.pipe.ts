import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroImagen'
})
export class HeroImagenPipe implements PipeTransform {

  transform( hero: Hero ): string {

    if ( !hero.id && !hero.alt_img ) {
      return 'assets/no-image.png';
    }

    if ( hero.alt_img ) return hero.alt_img; // https:///google.com/flash.png

    return `assets/heroes/${ hero.id }.jpg`;

  }

}
