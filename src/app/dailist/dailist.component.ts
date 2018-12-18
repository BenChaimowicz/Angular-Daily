import { Component, OnInit } from '@angular/core';
import { Daily } from '../daily';

@Component({
  selector: 'app-dailist',
  templateUrl: './dailist.component.html',
  styleUrls: ['./dailist.component.css']
})
export class DailistComponent implements OnInit {

  private _dailyList: Daily[] = [];

  constructor() { }

  getList() { return this._dailyList; }
  addToList(daily: Daily) { this._dailyList.push(daily); }
  
  ngOnInit() {
  }

}
