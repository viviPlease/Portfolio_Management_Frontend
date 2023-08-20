import { Component, OnInit } from '@angular/core';
import { Assets } from '../../../domain/assets';
import { AssetsService } from '../../../service/assets.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-ecommerce-charts',
  styleUrls: ['./charts-panel.component.scss'],
  templateUrl: './charts-panel.component.html',
})
export class ECommerceChartsPanelComponent  implements OnInit{
  

    id!: number;
    amount!:string;
    transOutNum!:number;
    assets!: Assets;
    a!:number
    submitted = false;
    constructor(private route: ActivatedRoute,private router: Router,
      private assetsService: AssetsService) { }
  
    ngOnInit() {
      this.assets = new Assets();
      
  
      // this.id = this.route.snapshot.params['id'];
      this.id=1;
      
      this.assetsService.getAssetsById(this.id)
        .subscribe(data => {
          console.log(data)
          this.assets = data;
        }, error => console.log(error));
    }

    transIn() {
      
      // this.amount=this.route.snapshot.params['amount'];
      
      this.a=parseFloat(this.amount)
      this.id=4
      this.assetsService
      .transforIn(this.id,this.a).subscribe(data => {
        // console.log(data)

        this.gotoRefrash();
      }, 
      error => console.log(error));
    }
  
    onSubmit() {
      this.submitted = true;
      this.transIn();    
    }

    gotoRefrash() {
      this.ngOnInit();
      this.router.navigate(['/dashboard']);
    }
}
