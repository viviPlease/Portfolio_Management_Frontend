import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { StockHold } from "../../../domain/fundHold";
import { StockholdService } from "../../../service/stockhold.service";
import { FundholdService } from "../../../service/fundhold.service";
import { Router } from "@angular/router";

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./my-funds.component.scss'],
  templateUrl: './my-funds.component.html',
})
export class MyFundsComponent implements OnInit {
  stockhold!: Observable<StockHold[]>;
  accountId!:number

  constructor(private fundholdService: FundholdService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.accountId=4;
    this.stockhold = this.fundholdService.getFundholdList(this.accountId);
  }

  // deleteStock(ticker: string) {
  //   this.stockholdService.deleteStock(ticker)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.reloadData();
  //       },
  //       error => console.log(error));
  // }

  // stockDetails(ticker: string){
  //   console.log(this.stockhold)
  //   this.router.navigate(['pages/ui-features/typography', ticker]);
  // }
}

