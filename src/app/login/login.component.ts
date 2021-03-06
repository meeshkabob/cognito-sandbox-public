import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { environment } from '../../environments/environment.tns';

import { Cognito, UserSession } from 'nativescript-cognito';

@Component({
  selector: "ns-login",
  moduleId: module.id,
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  @ViewChild("username") username: ElementRef;
  @ViewChild("password") password: ElementRef;
  cognito: Cognito;

  ngOnInit() {
    console.log(environment.poolId);
    this.cognito = new Cognito(environment.poolId, environment.clientId);
  }

  async login() {
    try {
        const data: UserSession = await this.cognito.authenticate('mgrasso@anthemengineering.com', 'P@ssw0rd!');
        let details = await this.cognito.getUserDetails();
        console.log(data);
        console.log(details.attributes);
        console.log(details.settings);
    } catch (e) {
        console.log('login failure', e);
    }
  }
}
