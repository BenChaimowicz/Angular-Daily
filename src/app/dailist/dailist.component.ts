import { Component, OnInit } from '@angular/core';
import { Daily } from '../daily';

@Component({
  selector: 'dailist',
  templateUrl: './dailist.component.html',
  styleUrls: ['./dailist.component.css']
})
export class DailistComponent implements OnInit {

  private _dailyList: Daily[] = [];
  private _idCounter = 0;

  constructor() { }

  getList() { return this._dailyList; }
  addToList(daily: Daily) { this._dailyList.push(daily); }
  onSave(name: string) {
    const newDaily = new Daily(this._idCounter, name);
    this.addToList(newDaily);
    console.log(this.getList());
    this._idCounter++;
  }
  
  ngOnInit() {
  }

}
