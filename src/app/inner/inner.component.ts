import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {
  @Input() name:string;
  @Output() eventFromInner = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  sendToOuter(){
    this.eventFromInner.emit(this.name);
  }

}
