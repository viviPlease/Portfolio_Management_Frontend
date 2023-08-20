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

  transIn() {
      
    // this.amount=this.route.snapshot.params['amount'];
    

    this.id=4
    this.stockholdService
    .buystock(this.id,this.ticker,this.buyAmount).subscribe(data => {
      console.log(222222222)
      this.gotoRefrash();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    console.log(333333333)
    // this.submitted = true;
    this.transIn();    
  }

  gotoRefrash(){
    this.router.navigate(['/table/tree-grid']);
  }
}
