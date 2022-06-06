import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero: Hero = 
  // {
  //   id : 1,
  //   name : "Windstorm"
  // }
  heroes: Hero[] =[]
  // selectedHero: Hero |null =null;

  // 依赖注入
  constructor(private heroService:HeroService) {
    
  }
  
  ngOnInit(): void {
    this.getHeros()
  }
  
  getHeros():void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes=heroes)
  }
  // onSelect(hero: Hero) : void  {
  //   this.selectedHero = hero
  // }
}
