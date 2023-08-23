import { Component, OnInit } from '@angular/core';
import { Assets } from '../../../domain/assets';
import { AssetsService } from '../../../service/assets.service';
import { Router, ActivatedRoute } from '@angular/router';
import Chart from 'chart.js';


@Component({
  selector: 'ngx-ecommerce-charts',
  styleUrls: ['./charts-panel.component.scss'],
  templateUrl: './charts-panel.component.html',
})
export class ECommerceChartsPanelComponent  implements OnInit{
  

    id!: number;
    amount!:string;
    transOutNum!:string;
    assets!: Assets;
    a!:number
    submitted = false;
    constructor(private route: ActivatedRoute,private router: Router,
      private assetsService: AssetsService) { }
  
    ngOnInit() {
      this.assets = new Assets();

      this.id=4;
      this.amount=null;
      this.transOutNum=null;
      this.assetsService.getAssetsById(this.id)
        .subscribe(data => {
          this.assets = data;
          let pieChartCtx = document.getElementById("assetsPieChart")
        let chartData = {
          datasets: [
              {
                  data: [data.stockAssets, data.fundAssets, data.balance],
                  backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                  ],
              }
          ],
      
          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: ["Stock Assets", "Fund Assets", "Balance"]
        };
        let myPieChart = new Chart(pieChartCtx, {
          type: "pie",
          data: chartData,
        });
        }, error => console.log(error));

        

    }

    transIn() {
      
      // this.amount=this.route.snapshot.params['amount'];
      console.log(this.amount)
      this.a=parseFloat(this.amount)
      this.id=4
      this.assetsService
      .transforIn(this.id,this.a).subscribe(data => {
        this.gotoRefrash();
      }, 
      error => console.log(error));
    }
  
    onSubmit() {
      this.submitted = true;
      this.transIn();    
    }

    transferOut(){
      this.a=parseFloat(this.transOutNum)
      this.id=4
      console.log(this.a)
      this.assetsService
      .transforOut(this.id,this.a).subscribe(data => {
        this.gotoRefrash();
      }, 
      error => console.log(error));
    }

    gotoRefrash() {
      this.ngOnInit();
      this.router.navigate(['/pages/dashboard']);
    }
}
