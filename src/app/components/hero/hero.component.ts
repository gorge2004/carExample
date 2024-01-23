import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, SchedulerAction, SchedulerLike, Subscription, concatMap, delay, interval, of } from 'rxjs';

@Component({
  selector: 'components-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {


  public baseURlImg: string = 'assets/imgs/toyota';
  public interval?: Observable<number> ;
  public backgroundImgs: string[] = [
    'corolla-1.jpeg',
    'corolla-2.jpeg',
    'suv-1.jpeg',
    'tacoma.jpeg',
    'tundra-2.jpeg',
    'tundra.jpeg',


  ];
  public backgroundImg: string =  `${this.baseURlImg}/${this.backgroundImgs[this.getRandomBackgroundImg(this.backgroundImgs.length)]}`;

  ngOnInit(): void {
    this.interval = interval(2500);
    this.interval.subscribe( num => {
      this.backgroundImg = `${this.baseURlImg}/${this.backgroundImgs[this.getRandomBackgroundImg(this.backgroundImgs.length)]}`;

    })
  }

  public getRandomBackgroundImg(total:number): number {

    return Math.round( Math.random() * (total - 1));
  }
  ngOnDestroy(): void {

  }

};


