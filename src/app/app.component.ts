import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fibonacci';
  alwaysGrowing!:Subscription;
  numberProduction$!:Observable<number>;
  item:number=0;
  itemSeries!:string;
  magicNumber!:number;
  counter!:number;
  magicSeries!:string;

  ngOnInit(): void {
    this.numberProduction$ = interval(1000);
    this.itemSeries="";
    this.magicSeries="";
    this.alwaysGrowing = this.numberProduction$.subscribe(newone => {
      this.counter =newone ;
      let tmp =this.item ;
      this.item = this.item+ newone;
      this.itemSeries = this.itemSeries + " " + this.item;
      this.magicNumber= this.item/tmp;
      this.magicSeries = this.magicSeries + "  f(" + newone + ")=" + this.item + "/" + tmp + "=" + this.magicNumber + "";
    });

  }
}
