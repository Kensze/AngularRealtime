import { Component, OnInit } from '@angular/core';
import { HomeService } from "../homes/home.service";
import { ActivatedRoute } from '@angular/router'; 

import { Home } from '../models/home.model';


@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.css']
})
export class ListHomeComponent implements OnInit {

  home: Home[];
  id: number;
  public intervalid:any;


  constructor(private _homeService: HomeService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getHome(this.id);
  }

getHome(id: number) {

 this.intervalid = setInterval(() => {
  this._homeService.getHome(id).subscribe((data: Home[]) => { this.home = data });
  }, 1000);
 }

ngOnDestroy() {
  if (this.intervalid) {
    clearInterval(this.intervalid);
  }
 }

}
