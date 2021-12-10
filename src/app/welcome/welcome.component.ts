import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WelcomedataService} from "../service/data/welcomedata.service";


@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcome = 'Hello, this message is from welcome component.'
  name = '';
  welcomeMessageFromService: string | undefined

  constructor(
    private route: ActivatedRoute,
    private welcomeService: WelcomedataService
  ) { }

  ngOnInit(): void {

     this.name = this.route.snapshot.params['name'];

  }

  getWelcomeMessageWithParameters(){
    this.welcomeService.executeHelloWorldServiceWithPath(this.name).subscribe(
      response => this.handleSuccesResponse(response),
      error => this.handleErrorResponse(error)
    );
    //console.log("get welcome message")
  }
  getWelcomeMessage(){
    //console.log(this.welcomeService.executeHelloWorldBeanService());
    this.welcomeService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccesResponse(response),
      error => this.handleErrorResponse(error)
    );
    //console.log("get welcome message")
  }

  handleSuccesResponse(response: any){
    this.welcomeMessageFromService = response.message;
    console.log(response.message)
  }

  handleErrorResponse(error: any) {
    this.welcomeMessageFromService = "error occured: " + error.message;
  }

}
