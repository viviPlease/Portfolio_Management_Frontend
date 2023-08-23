import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbRegisterComponent } from '@nebular/auth';
import { AccountService } from '../account.service';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
})
export class NgxRegisterComponent extends NbRegisterComponent {
  name:string
  pwd:string
  confirmPassword:string
  loading:boolean = false

  constructor(service: NbAuthService, cd: ChangeDetectorRef, router: Router, private accountService:AccountService){
    super(service, {}, cd, router);
  }

  register() {
    this.loading = true;
    this.accountService
    .register(this.name,this.pwd).subscribe(data => {
        if (data) {
          alert('Registered Successfully!');
          this.router.navigate(['/auth/login']);
        }
    }, 
    error => {
      alert('Account name already exists!');
      this.loading = false;
      console.log(error)
    });
  }
}