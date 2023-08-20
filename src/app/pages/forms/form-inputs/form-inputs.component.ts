import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { StockHold } from "../../../domain/fundHold";
import { StockholdService } from "../../../service/stockhold.service";
import { Router } from "@angular/router";

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent implements OnInit {
  stockhold!: Observable<StockHold[]>;
  accountId!:number

  constructor(private stockholdService: StockholdService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.accountId=4;
    this.stockhold = this.stockholdService.getStockholdList(this.accountId);
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

