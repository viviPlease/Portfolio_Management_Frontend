import { Component, OnInit } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from "@angular/common/http" ;
import { HttpHeaders } from "@angular/common/http" ;
import { AccountService } from '../account.service';
import { Account } from '../account';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class NgxLoginComponent extends NbLoginComponent{
  accountservice!:AccountService
  name:string
  password:string
  psw:string
  loginSuccess:boolean = false

  login1() {
    this.psw=this.password
    
    this.accountservice
    .login(this.name,this.psw).subscribe(data => {
        if (data === true) {
          this.loginSuccess = true; 
        } else {
          this.loginSuccess = false;
        }

    }, 
    error => console.log(error));
  }

  

}