import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Daily } from '../daily';

@Component({
  selector: 'daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {

  @Input() currentDaily: Daily;
  @Output() destroyDaily: EventEmitter<number> = new EventEmitter<number>();
  
  destroyThis = false;
  currentProgress: any;

  constructor() {
  }

  ngOnInit() {
  }

  timePercentage(): number {
    const percentDone: number = (this.currentDaily.timespentdoing / this.currentDaily.timeLimit) * 100;

    if (isNaN(percentDone)) { 
      return 0;
    } else {return percentDone; }
  }

  onDelete() {
    this.destroyThis = confirm('Delete this Daily?') ? true : false;
    if (this.destroyThis = true) {
      this.destroyDaily.emit(this.currentDaily.id);
    }
  }

  activateDaily() {
    this.currentProgress = setInterval(() => { this.timePercentage(); }, 1000);
  }

}
