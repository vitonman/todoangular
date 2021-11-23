import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  informationlayer : string = 'This is message from information component.'

  constructor() { }

  ngOnInit(): void {
    console.log(this.informationlayer);
  }

}
