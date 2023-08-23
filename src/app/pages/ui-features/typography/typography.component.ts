import { Component, OnInit } from '@angular/core';
import { Stock } from '../../../domain/stock';
import { Router, ActivatedRoute } from '@angular/router';
import { StockService } from '../../../service/stock.service';
import { StockholdService } from '../../../service/stockhold.service';
import { Stockhis } from '../../../domain/stockhis';
import { Observable  } from 'rxjs';
import { NbThemeService } from '@nebular/theme';
import { map } from 'rxjs/operators'

@Component({
  selector: 'ngx-typography',
  styleUrls: ['./typography.component.scss'],
  templateUrl: './typography.component.html',
})
export class TypographyComponent  implements OnInit {

  ticker!: string;
  stock!: Stock;
  stockhiss:Observable<Stockhis[]>;
  buyAmount!: number
  id!:number
  buySuccessMessage: boolean = false;
  data: {};
  options: any;
  themeSubscription: any;

  
  


  constructor(private route: ActivatedRoute,private router: Router,
    private stockService:StockService,
    private stockholdService: StockholdService,private theme: NbThemeService) {
      this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

        const colors: any = config.variables;
        const chartjs: any = config.variables.chartjs;


        this.ticker = this.route.snapshot.params['ticker'];

        
      
        this.stockhiss = this.stockService.getstockhis(this.ticker,"","");
    
    this.stockhiss.pipe(
      map(data => {
        // Sort the data by the "time" property
        const sortedData = data.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());

        // Extract "currentPrice" and format "time"
        const labels = sortedData.map(item => new Date(item.time).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' }));
        const currentPrices = sortedData.map(item => item.currentPrice);
        const openPrices = sortedData.map(item => item.openPrice);
        const highPrices=sortedData.map(item => item.highPrice);
        const lowPrices=sortedData.map(item => item.lowPrice);
        const closePrices=sortedData.map(item => item.closePrice);


        return { currentPrices, labels,closePrices ,openPrices,highPrices,lowPrices};
      })
    ).subscribe(({ currentPrices, labels ,closePrices,openPrices,highPrices,lowPrices}) => {
      console.log('Times:', labels);
      console.log('Current Prices:', currentPrices);
      // Now you can use 'this.times' anywhere in the component

      const datasets = [];

      this.data = {
        labels,
        datasets: [{
          label: 'Current Price',
          data: currentPrices,
          borderColor: colors.primary,
          backgroundColor: colors.primary,
          fill: false,
          borderDash: [3, 3],
          pointRadius: 3,
          pointHoverRadius: 5,
        }, {
          label: 'Open Price',
          data: openPrices,
          borderColor: colors.dangerLight,
          backgroundColor: colors.dangerLight,
          fill: false,
          borderDash: [5, 5],
          pointRadius: 3,
          pointHoverRadius: 5,
        }, {
          label: 'High Price',
          data: highPrices,
          borderColor: colors.info,
          backgroundColor: colors.info,
          fill: false,
          pointRadius: 3,
          pointHoverRadius: 5,
        }, {
          label: 'Low Price',
          data: lowPrices,
          borderColor: colors.success,
          backgroundColor: colors.success,
          fill: false,
          pointRadius: 3,
          pointHoverRadius: 5,
        },
        {
          label: 'Close Price',
          data:closePrices,
          borderColor: colors.warning,
          backgroundColor: colors.warning,
          fill: false,
          pointRadius: 3,
          pointHoverRadius: 5,
        }],
      };

      this.options = {
        
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'bottom',
          labels: {
            fontColor: chartjs.textColor,
          },
        },
        hover: {
          mode: 'index',
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: '',
              },
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Value',
              },
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
        height: 500,
      };

      
    });

        
       
      });
     }

  ngOnInit() {
    this.stock = new Stock();

    this.ticker = this.route.snapshot.params['ticker'];
    // console.log(this.ticker)

    this.stockService.getStock(this.ticker)
      .subscribe(data => {
        this.stock = data;
      }, error => console.log(error));


      
}


  buyStocks() {
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

}
