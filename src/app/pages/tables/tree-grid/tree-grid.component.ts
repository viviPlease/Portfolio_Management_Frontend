import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { StockholdService } from '../../../service/stockhold.service';
import { Trade } from '../../../domain/trade';


@Component({
  selector: 'ngx-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.scss'],
})

export class TreeGridComponent implements OnInit {
  trades!: Observable<Trade[]>;
  startTime!:Date;
  endTime!:Date;
  accoundId!:number;

  constructor(private stockholdService: StockholdService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.accoundId=4
    // this.endTime=
    // this.startTime=null
    this.trades = this.stockholdService.gettrades(this.accoundId,"2023-08-15T10:30:00Z","2023-08-19T10:30:00Z");
  }

  // deleteStock(ticker: string) {
  //   this.stockService.deleteStock(ticker)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.reloadData();
  //       },
  //       error => console.log(error));
  // }

  // stockDetails(ticker: string){
  //   console.log(this.stocks)
  //   this.router.navigate(['pages/ui-features/typography', ticker]);
  // }
}
