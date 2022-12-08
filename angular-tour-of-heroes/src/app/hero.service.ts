import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private messageService;
  constructor(messageService: MessageService) {
    this.messageService = messageService;
  }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService:fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((hero) => hero.id === id)!;
    this.messageService.add(`HeroService:fetched heroe detail,ID: ${id}`);
    return of(hero);
  }
}
