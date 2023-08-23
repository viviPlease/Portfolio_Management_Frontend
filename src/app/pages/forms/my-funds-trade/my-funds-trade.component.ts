import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { StockHold } from "../../../domain/fundHold";
import { StockholdService } from "../../../service/stockhold.service";
import { FundholdService } from "../../../service/fundhold.service";
import { Router } from "@angular/router";
import { FundTrade } from "../../../domain/fundTrade";
import Chart from 'chart.js';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./my-funds-trade.component.scss'],
  templateUrl: './my-funds-trade.component.html',
})
export class MyFundsTradeComponent implements OnInit {
  stockhold!: Observable<StockHold[]>;
  fundtrades!: Observable<FundTrade[]>;
  accountId!:number
  tradeAmountByDay!:Object;
  dateWithTrades!: Array<string>;
  amountByDay!: Array<number>;

  constructor(private fundholdService: FundholdService,
    private router: Router) {}

  ngOnInit() {
    this.tradeAmountByDay = {};
    this.dateWithTrades = [];
    this.amountByDay = [];
    this.reloadData();
    this.fundtrades.subscribe(data=>{

      data.forEach(item=>{
        let date = item.time.toString().substring(0,10)
        if(this.tradeAmountByDay.hasOwnProperty(date)){
          this.tradeAmountByDay[date] += item.amount * item.price
        }
        else{
          this.tradeAmountByDay[date] = item.amount * item.price
        }
      })
      console.log(this.tradeAmountByDay)
      for(let date in this.tradeAmountByDay){
        this.dateWithTrades.push(date);
        this.amountByDay.push(this.tradeAmountByDay[date]);
      }
      this.dateWithTrades = this.dateWithTrades.reverse().sort();
      this.amountByDay = this.amountByDay.reverse().sort();
      console.log(this.dateWithTrades);
      console.log(this.amountByDay);
      let ctx = document.getElementById("tradeAmountBarChart")
      const tradeAmountBarChartData = {
        labels: this.dateWithTrades,
        datasets: [{
          label: "Trade Amount By Day",
          data: this.amountByDay,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1,
        }]
      };
      let tradeAmountBarChart = new Chart(ctx, {
        type: "bar",
        data: tradeAmountBarChartData,
        options:{
        }
      });
    })
  }

  reloadData() {
    this.accountId=4;
    this.stockhold = this.fundholdService.getFundholdList(this.accountId);
    this.fundtrades = this.fundholdService.gettrades(this.accountId,null,null);
  }

}

