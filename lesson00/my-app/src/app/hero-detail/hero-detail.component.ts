import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero:Hero|undefined=undefined;
  /*
  *  ActivateRoute保存着到这个HeroDetailComponent实例的路由信息，
  * 这个组件对从URL中提取的路由参数感兴趣，其中的Id参数就是要显示的英雄的Id
  * Location是一个Angular的服务，用来与浏览器打交道
  */
  constructor(
    private route:ActivatedRoute,
    private heroService:HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero():void {
    const id = +(this.route.snapshot.paramMap.get('id')||0)
    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero)
  }

  goBack(): void {
    this.location.back()
  }
}
