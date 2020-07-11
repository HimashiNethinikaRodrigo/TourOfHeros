import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
// decorator accepts a metadata object for the service
@Injectable({
  // provider is something that can create or deliver a service
  // registers a provider with the root injector for your service by including provider metadata,
  // that is providedIn: 'root' in the @Injectable() decorator.
  providedIn: 'root'
})
export class HeroService {
  // service-in-service
  constructor(private messageService: MessageService) { }

  // method has a synchronous signature
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

 // must have an asynchronous signature
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add('HeroService: fetched hero');
    return of(HEROES.find(hero => hero.id = id));
  }

}
