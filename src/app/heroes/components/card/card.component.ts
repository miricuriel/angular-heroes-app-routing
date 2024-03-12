import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {
// Llamar la entrada de heroe
  @Input()
  public hero!: Hero;

// Validar si existe
  ngOnInit(): void {
    if ( !this.hero ) throw Error('Hero property is required');
  }

}
