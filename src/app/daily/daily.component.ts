import { Component, OnInit, Input } from '@angular/core';
import { Daily } from '../daily';

@Component({
  selector: 'daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {

  @Input() currentDaily: Daily;

  constructor() {
  }

  timePercentage(): number {
    const percentDone: number = (this.currentDaily.timespentdoing / this.currentDaily.timelimit) * 100;
    return percentDone;
  }
  ngOnInit() {
  }

}
