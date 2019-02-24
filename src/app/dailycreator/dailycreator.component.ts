import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dailycreator',
  templateUrl: './dailycreator.component.html' ,
  styleUrls: ['./dailycreator.component.css']
})
export class DailycreatorComponent implements OnInit {

  @Output() newDailyData = new EventEmitter<any>();
  nameInput: string;
  timeLimitInput: number;
  x;
  constructor() { }

  ngOnInit() {
  }
  log(x) {
    console.log(x);
  }
  onSave() {
    this.newDailyData.emit({
      newName : this.nameInput,
      newTimeLimit: this.timeLimitInput * 60,
    });
  }
}
