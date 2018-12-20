import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dailycreator',
  templateUrl: './dailycreator.component.html' ,
  styleUrls: ['./dailycreator.component.css']
})
export class DailycreatorComponent implements OnInit {

  @Output() newName = new EventEmitter<string>();
  @Output() newLimit = new EventEmitter<number>();
  nameInput: string;
  timeLimitInput = 60;


  constructor() { }

  ngOnInit() {
  }

  onSave() {
    this.newName.emit(this.nameInput);
    this.newLimit.emit(this.timeLimitInput);
  }

}
