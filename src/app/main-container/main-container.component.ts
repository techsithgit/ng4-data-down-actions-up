import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {
  names = ['john', 'judy', 'peter'];
  name:string = '';
  constructor() { }

  ngOnInit() {
  }
  eventFromOuter(passed:string){
    this.name = passed;
  }

}
