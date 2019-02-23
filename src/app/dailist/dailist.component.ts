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
  onSave(data: any) {
    console.log(data);
    const newDaily = new Daily(this._idCounter, data.newName, data.newTimeLimit);
    this.addToList(newDaily);
    console.log(this.getList());
    this._idCounter++;
  }
  onDelete(dailyID: number) {
    this._dailyList.splice(this.getIndexOfId(dailyID), 1);
  }
  getIndexOfId(id: number): number {
    for (let i = 0; i < this._dailyList.length; i++) {
      const currDaily: Daily = this._dailyList[i];
      if (currDaily.id === id) { return i; }
    }
    throw new Error('ID was not found.');
  }

  ngOnInit() {
  }

}
