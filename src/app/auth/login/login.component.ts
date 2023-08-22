import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NbAuthService, NbLoginComponent } from '@nebular/auth';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from "@angular/common/http" ;
import { HttpHeaders } from "@angular/common/http" ;
import { AccountService } from '../account.service';
import { Account } from '../account';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class NgxLoginComponent extends NbLoginComponent{
  name:string
  password:string
  loading:boolean = false
  loginSuccess:boolean = false

  constructor(service: NbAuthService, cd: ChangeDetectorRef, router: Router, private accountService:AccountService){
    super(service, {}, cd, router);
  }

  login1() {
    this.loading = true;
    this.accountService
    .login(this.name,this.password).subscribe(data => {
        if (data) {
          console.log(data)
          localStorage.setItem("account", JSON.stringify(data));
          this.loginSuccess = true; 
          this.router.navigate(['/pages/dashboard']);
        } else {
          
          
        }

    }, 
    error => {
      alert('Incorrent account name or password');
      this.loading = false;
      this.loginSuccess = false;
      console.log(error)
    });
  }

  

}