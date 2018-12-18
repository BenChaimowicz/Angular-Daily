import { Component, OnInit } from '@angular/core';
import { Daily } from '../daily';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {

  currentDaily: Daily;

  constructor() {
  }

  ngOnInit() {
  }

}
