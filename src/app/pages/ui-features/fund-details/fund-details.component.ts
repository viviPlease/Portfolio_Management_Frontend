import { Component, OnInit } from '@angular/core';
import { Stock } from '../../../domain/stock';
import { Router, ActivatedRoute } from '@angular/router';
import { FundService } from '../../../service/fund.service';
import { Fund } from '../../../domain/fund';

@Component({
  selector: 'ngx-typography',
  styleUrls: ['./fund-details.component.scss'],
  templateUrl: './fund-details.component.html',
})
export class FundDetailsComponent  implements OnInit {

  ticker!: string;
  code!: string;
  stock!: Stock;
  fund!: Fund;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: FundService) { }

  ngOnInit() {
    this.fund = new Fund();

    this.code = this.route.snapshot.params['code'];
    console.log(this.route.snapshot.params)

    this.employeeService.getFund(this.code)
      .subscribe(data => {
        console.log(data)
        this.fund = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['funds']);
  }
}
