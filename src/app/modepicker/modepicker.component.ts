import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modepicker',
  templateUrl: './modepicker.component.html',
  styleUrls: ['./modepicker.component.scss']
})
export class ModepickerComponent implements OnInit {

  constructor() { }
  purity:string = 'cute';

  ngOnInit() {
  }
  toggleView(toggleval:string){
    this.purity=toggleval;
    console.log(this.purity)
    console.log("blahblah")
  }

}
