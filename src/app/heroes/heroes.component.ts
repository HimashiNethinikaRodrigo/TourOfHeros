import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // Create Hero object
  // hero: Hero = {
  //   id: 1,
  //   name: 'John'
  // };

  // expose heroes array for binding
  heroes: Hero [];
  selectedHero: Hero;

  // inject Hero Service
  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`Selected Hero Id =${hero.id}`);
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  // subscribe() method passes the emitted array to the callback,
  // which sets the component's heroes property
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
