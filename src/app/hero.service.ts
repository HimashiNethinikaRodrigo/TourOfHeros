import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
// decorator accepts a metadata object for the service
@Injectable({
  // provider is something that can create or deliver a service
  // registers a provider with the root injector for your service by including provider metadata,
  // that is providedIn: 'root' in the @Injectable() decorator.
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api


  // service-in-service
  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService) { }

  // method has a synchronous signature
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

 // must have an asynchronous signature
  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero []>(this.heroesUrl)
      .pipe(
        // catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    return of(HEROES.find(hero => hero.id = id));
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }


}
