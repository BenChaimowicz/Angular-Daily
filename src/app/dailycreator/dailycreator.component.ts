import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dailycreator',
  templateUrl: './dailycreator.component.html' ,
  styleUrls: ['./dailycreator.component.css']
})
export class DailycreatorComponent implements OnInit {

  @Output() newName = new EventEmitter();
  nameInput: string;


  constructor() { }

  ngOnInit() {
  }

  onSave() { 
    this.newName.emit(this.nameInput);
  }

}
