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
    transOutNum!:string;
    assets!: Assets;
    a!:number
    submitted = false;
    constructor(private route: ActivatedRoute,private router: Router,
      private assetsService: AssetsService) { }
  
    ngOnInit() {
      this.assets = new Assets();
      console.log(this.amount)
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
      console.log(this.amount)
      this.a=parseFloat(this.amount)
      this.id=1
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

    transferOut(){
      console.log(this.transOutNum)
      this.a=parseFloat(this.transOutNum)
      this.id=1
      this.assetsService
      .transforOut(this.id,this.a).subscribe(data => {
        // console.log(data)

        this.gotoRefrash();
      }, 
      error => console.log(error));
    }

    gotoRefrash() {
      this.ngOnInit();
      this.router.navigate(['/dashboard']);
    }
}
