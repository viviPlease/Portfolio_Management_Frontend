import { Component, OnInit } from '@angular/core';
import { Stock } from '../../../domain/stock';
import { Router, ActivatedRoute } from '@angular/router';
import { StockService } from '../../../service/stock.service';

@Component({
  selector: 'ngx-typography',
  styleUrls: ['./typography.component.scss'],
  templateUrl: './typography.component.html',
})
export class TypographyComponent  implements OnInit {

  ticker!: string;
  stock!: Stock;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: StockService) { }

  ngOnInit() {
    this.stock = new Stock();

    this.ticker = this.route.snapshot.params['ticker'];
    console.log(this.route.snapshot.params)

    this.employeeService.getStock(this.ticker)
      .subscribe(data => {
        console.log(data)
        this.stock = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['stocks']);
  }
}
