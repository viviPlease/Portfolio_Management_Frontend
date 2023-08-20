import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { StockHold } from "../../../domain/fundHold";
import { StockholdService } from "../../../service/stockhold.service";
import { FundholdService } from "../../../service/fundhold.service";
import { Router } from "@angular/router";
import { FundTrade } from "../../../domain/fundTrade";

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./my-funds-trade.component.scss'],
  templateUrl: './my-funds-trade.component.html',
})
export class MyFundsTradeComponent implements OnInit {
  stockhold!: Observable<StockHold[]>;
  fundtrades!: Observable<FundTrade[]>;
  accountId!:number

  constructor(private fundholdService: FundholdService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.accountId=4;
    this.stockhold = this.fundholdService.getFundholdList(this.accountId);
    this.fundtrades = this.fundholdService.gettrades(1,null,null);
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

