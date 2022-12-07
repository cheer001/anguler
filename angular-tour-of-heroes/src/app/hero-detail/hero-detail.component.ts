import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  ngOnInit(): void {}

  constructor() {}

  /** 表示要从外部接受一个hero对象 并且是Hero实体类型 */
  @Input() hero?: Hero;
}
