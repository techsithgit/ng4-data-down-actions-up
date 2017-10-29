import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {
  @Input() name:string;
  @Output() eventFromInner = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  // Actions
  sendToOuter(){
    // this will be executed in Outer Component when emitted
    this.eventFromInner.emit(this.name);
  }

}
