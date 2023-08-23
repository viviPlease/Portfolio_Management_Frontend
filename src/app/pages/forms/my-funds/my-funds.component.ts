import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { StockHold } from "../../../domain/fundHold";
import { StockholdService } from "../../../service/stockhold.service";
import { FundholdService } from "../../../service/fundhold.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FundHoldHis } from "../../../domain/fundholdhis";
import { NbThemeService } from "@nebular/theme";

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./my-funds.component.scss'],
  templateUrl: './my-funds.component.html',
})
export class MyFundsComponent implements OnInit {
  stockhold!: Observable<StockHold[]>;
  accountId!:number

  data: {};
  options: any;
  themeSubscription: any;

  fundholdhiss!: Observable<FundHoldHis[]>

  constructor(private route: ActivatedRoute,private router: Router,
    // private stockService:StockService,
    private fundholdService: FundholdService,private theme: NbThemeService) {
      this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

        const colors: any = config.variables;
        const chartjs: any = config.variables.chartjs;


        this.accountId = 4;

        
      
        this.fundholdhiss = this.fundholdService.getallfundholdtrend(this.accountId);

        this.fundholdhiss.subscribe((fundData: FundHoldHis[]) => {
          const colors: any = config.variables;
          
    
          this.data = {
            labels: fundData[0].dates.map(date => this.formatDate(date)),// Assuming dates are the same for all stocks
            datasets: fundData.map(stock => ({
              label: stock.code,
              data: stock.prices,
              borderColor: colors.primary , // Replace 'default_color' with your desired color
              backgroundColor: colors.primary,
              fill: false,
              pointRadius: 3,
              pointHoverRadius: 5,
            })),
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

  fundDetails(code: string){
    this.router.navigate(['pages/forms/datepicker', code]);
  }

  formatDate(date: string): string {
    const parsedDate = new Date(date);
    const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0');
    const day = parsedDate.getDate().toString().padStart(2, '0');
    return `${month}/${day}`;
  }
}

