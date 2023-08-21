import { Component, OnInit } from '@angular/core';
import { Stock } from '../../../domain/stock';
import { Router, ActivatedRoute } from '@angular/router';
import { StockService } from '../../../service/stock.service';
import { StockholdService } from '../../../service/stockhold.service';

@Component({
  selector: 'ngx-typography',
  styleUrls: ['./typography.component.scss'],
  templateUrl: './typography.component.html',
})
export class TypographyComponent  implements OnInit {

  ticker!: string;
  stock!: Stock;
  buyAmount!: number
  id!:number
  buySuccessMessage: boolean = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private stockService:StockService,
    private stockholdService: StockholdService) { }

  ngOnInit() {
    this.stock = new Stock();

    this.ticker = this.route.snapshot.params['ticker'];
    console.log(this.ticker)

    this.stockService.getStock(this.ticker)
      .subscribe(data => {
        console.log(data)
        this.stock = data;
      }, error => console.log(error));
  }

  buyStocks() {
      
    // this.amount=this.route.snapshot.params['amount'];
    

    this.id=4

    this.stockholdService
    .buystock(this.id,this.ticker,this.buyAmount).subscribe(data => {
        if (data === true) {
          this.buySuccessMessage = true; 
        } else {
          this.buySuccessMessage = false;
        }

    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.buyStocks();    
  }

  gotoRefrash(){
    this.router.navigate(['/table/tree-grid']);
  }
}
