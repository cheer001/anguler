import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from './../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  private heroService;
  constructor(heroService: HeroService) {
    this.heroService = heroService;
  }

  heroes: Hero[] = [];
  selectedHero?: Hero;

  /** 获取服务中提供的getHeroes()方法返回的数据 */
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    /** 初始化Heroes数据列表 */
    this.getHeroes();
  }
}
