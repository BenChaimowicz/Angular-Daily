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
  currentProgress: number;
  activeTimer: any;
  isActive = false;
  imgURL: string;
  redLightIMG = '../../assets/red_light.png';
  greenLightIMG = '../../assets/green_light.png';

  constructor() {
    this.imgURL = this.redLightIMG;
  }

  ngOnInit() {
    this.currentProgress = this.currentDaily.timespentdoing;
  }

  timePercentage(): number {
    const percentDone: number = (this.currentDaily.timespentdoing / this.currentDaily.timeLimit) * 100;

    if (isNaN(percentDone)) { 
      return 0;
    } else {return percentDone; }
  }

  onDelete() {
    this.destroyThis = confirm('Delete this Daily?') ? true : false;
    if (this.destroyThis) {
      this.deactivateDaily();
      this.destroyDaily.emit(this.currentDaily.id);
    }
  }

  toggleActive() {
    if (!this.isActive) {
      this.isActive = true;
      this.imgURL = this.greenLightIMG;
      this.activateDaily();
    } else {
      this.isActive = false;
      this.imgURL = this.redLightIMG;
      this.deactivateDaily(); }
  }
  activateDaily() {
    this.activeTimer = setInterval(() => {
      this.timePercentage();
      this.currentProgress++;
      this.currentDaily.timespentdoing = this.currentProgress;
      console.log(this.timePercentage());
      console.log(this.currentProgress);
    }, 1000);
  }

  deactivateDaily() {
    clearInterval(this.activeTimer);
  }


}
