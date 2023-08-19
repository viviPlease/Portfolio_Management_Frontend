import { Component, OnInit } from '@angular/core';
import { Assets } from '../../../domain/assets';
import { AssetsService } from '../../../service/assets.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-ecommerce-charts',
  styleUrls: ['./charts-panel.component.scss'],
  templateUrl: './charts-panel.component.html',
})
export class ECommerceChartsPanelComponent  {
  

    id!: number;
    transInNum!:number;
    transOutNum!:number;
    assets!: Assets;
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
      console.log(11111111)
      this.transInNum=this.route.snapshot.params['transInNum'];
      this.assetsService
      .transforIn(this.transInNum,this.id).subscribe(data => {
        console.log(data)

        this.gotoRefrash();
      }, 
      error => console.log(error));
    }
  
    onSubmit() {
      console.log(2222222)
      this.submitted = true;
      this.transIn();    
    }

    gotoRefrash() {
      console.log(3333333)
      this.router.navigate(['/dashboard']);
    }

        // console.log("111111111111");


        // console.log(this.assets);
    
  
    // list(){
    //   this.router.navigate(['assets']);
    // }


}
