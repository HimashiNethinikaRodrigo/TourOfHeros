import { Component, OnInit } from '@angular/core';
import {HEROES} from '../mock-heroes';

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
  heroes = HEROES;

  constructor() {
  }

  ngOnInit(): void {
  }

}
