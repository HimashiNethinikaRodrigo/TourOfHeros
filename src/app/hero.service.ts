import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
// decorator accepts a metadata object for the service
@Injectable({
  // provider is something that can create or deliver a service
  // registers a provider with the root injector for your service by including provider metadata,
  // that is providedIn: 'root' in the @Injectable() decorator.
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // method has a synchronous signature
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

 // must have an asynchronous signature
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

}
