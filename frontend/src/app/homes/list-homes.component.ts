import { Component, OnInit } from '@angular/core';

import { Home } from '../models/home.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-list-homes',
  templateUrl: './list-homes.component.html',
  styleUrls: ['./list-homes.component.css']
})
export class ListHomesComponent implements OnInit {
  public intervalid:any;

  homes: Home[];
  constructor(private _homeService: HomeService) { }
    ngOnInit() {
      this.getHomes();
  }

 public getHomes() {
  this.intervalid = setInterval(() => {
    this._homeService.getHomes().subscribe((data: Home[]) => { this.homes = data });
    }, 1000);
  }

ngOnDestroy() {
  if (this.intervalid) {
    clearInterval(this.intervalid);
  }
 }

}
