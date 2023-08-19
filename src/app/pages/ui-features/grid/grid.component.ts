import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Stock } from "../../../domain/stock";
import { StockService } from "../../../service/stock.service";
@Component({
  selector: 'ngx-grid',
  styleUrls: ['./grid.component.scss'],
  templateUrl: './grid.component.html',
})
export class GridComponent implements OnInit {
  stocks!: Observable<Stock[]>;

  constructor(private stockService: StockService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.stocks = this.stockService.getStocksList();
  }

  deleteStock(ticker: string) {
    this.stockService.deleteStock(ticker)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  stockDetails(ticker: string){
    console.log(this.stocks)
    this.router.navigate(['pages/ui-features/typography', ticker]);
  }
}

