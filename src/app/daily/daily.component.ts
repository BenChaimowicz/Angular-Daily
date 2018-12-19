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

  ngOnInit() {
  }

}
