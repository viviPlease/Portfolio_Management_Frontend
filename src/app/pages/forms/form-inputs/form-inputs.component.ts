import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { StockHold } from "../../../domain/fundHold";
import { StockholdService } from "../../../service/stockhold.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NbThemeService } from "@nebular/theme";
import { StockHoldHis } from "../../../domain/stockholdhis";
import { map } from 'rxjs/operators'

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent implements OnInit {
  stockhold!: Observable<StockHold[]>;
  accountId!:number

  data: {};
  options: any;
  themeSubscription: any;

  stockholdhiss!: Observable<StockHoldHis[]>

  constructor(private route: ActivatedRoute,private router: Router,
    // private stockService:StockService,
    private stockholdService: StockholdService,private theme: NbThemeService) {
      this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

        const colors: any = config.variables;
        const chartjs: any = config.variables.chartjs;


        this.accountId = 4;

        
      
        this.stockholdhiss = this.stockholdService.getallstockholdtrend(this.accountId);

        this.stockholdhiss.subscribe((stockData: StockHoldHis[]) => {
          const colors: any = config.variables;
          
    
          this.data = {
            labels: stockData[0].dates.map(date => this.formatDate(date)),// Assuming dates are the same for all stocks
            datasets: stockData.map(stock => ({
              label: stock.name,
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
    this.stockhold = this.stockholdService.getStockholdList(this.accountId);
  }


  stockDetails(ticker: string){
    console.log(this.stockhold)
    this.router.navigate(['pages/forms/layouts', ticker]);
  }

  formatDate(date: string): string {
    const parsedDate = new Date(date);
    const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0');
    const day = parsedDate.getDate().toString().padStart(2, '0');
    return `${month}/${day}`;
  }
}

