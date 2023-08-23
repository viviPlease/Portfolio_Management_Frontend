import { Component, OnInit } from '@angular/core';
// import { Stock } from '../../../domain/stock';
import { Router, ActivatedRoute } from '@angular/router';
import { FundService } from '../../../service/fund.service';
import { Fund } from '../../../domain/fund';
import { FundholdService } from '../../../service/fundhold.service';
import { NbThemeService } from '@nebular/theme';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Fundhis } from '../../../domain/fundhis';

@Component({
  selector: 'ngx-typography',
  styleUrls: ['./fund-details.component.scss'],
  templateUrl: './fund-details.component.html',
})
export class FundDetailsComponent  implements OnInit {

  // ticker!: string;
  code!: string;
  // stock!: Stock;
  fund!: Fund;
  id!:number
  buyAmount!:number
  buySuccessMessage:boolean=false
  themeSubscription: any;
  fundhiss:Observable<Fundhis[]>;
  data: {};
  options: any;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: FundService,
    private fundholdService: FundholdService, private theme: NbThemeService) {
      this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

        const colors: any = config.variables;
        const chartjs: any = config.variables.chartjs;


        this.code = this.route.snapshot.params['code'];

        
      
        this.fundhiss = this.employeeService.getfundhis(this.code,"2023-08-07","2023-08-23");
    
    this.fundhiss.pipe(
      map(data => {
        // Sort the data by the "time" property
        const sortedData = data.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());

        // Extract "currentPrice" and format "time"
        const labels = sortedData.map(item => new Date(item.time).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' }));
        const unitNet = sortedData.map(item => item.unitNet);
        const accNet = sortedData.map(item => item.accNet);
        const rate=sortedData.map(item => item.rate);
        // const lowPrices=sortedData.map(item => item.lowPrice);
        // const closePrices=sortedData.map(item => item.closePrice);


        return { unitNet, labels,rate ,accNet};
      })
    ).subscribe(({ unitNet, labels,rate ,accNet}) => {


      const datasets = [];

      this.data = {
        labels,
        datasets: [{
          label: 'Unit Net',
          data: unitNet,
          borderColor: colors.primary,
          backgroundColor: colors.primary,
          fill: false,
          borderDash: [3, 3],
          pointRadius: 3,
          pointHoverRadius: 5,
        }, {
          label: 'Accumulated Net',
          data: accNet,
          borderColor: colors.dangerLight,
          backgroundColor: colors.dangerLight,
          fill: false,
          borderDash: [5, 5],
          pointRadius: 3,
          pointHoverRadius: 5,
        }, {
          label: 'Daily Growth Rate',
          data: rate,
          borderColor: colors.info,
          backgroundColor: colors.info,
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
    this.fund = new Fund();

    this.code = this.route.snapshot.params['code'];
    console.log(this.route.snapshot.params)

    this.employeeService.getFund(this.code)
      .subscribe(data => {
        console.log(data)
        this.fund = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['funds']);
  }

  buyStocks() {
    this.id=4
    this.fundholdService
    .buyfund(this.id,this.code,this.buyAmount).subscribe(data => {
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
