import { Component, EventEmitter, HostBinding, OnDestroy, OnInit, Output } from '@angular/core';
import { Fund } from '../../../../domain/fund';
import { Observable } from 'rxjs-compat';
import { FundService } from '../../../../service/fund.service';
import { Router } from '@angular/router';
// import { StockService } from '../../../../service/stock.service';

@Component({
  selector: 'ngx-room-selector',
  templateUrl: './room-selector.component.html',
  styleUrls: ['./room-selector.component.scss'],
})
export class RoomSelectorComponent implements OnInit {
  funds!: Observable<Fund[]>;
  fundcode!:string

  constructor(private fundService: FundService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.funds = this.fundService.getFundsList();
  }

  deleteFund(name: string) {
    this.fundService.deleteFund(name)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  fundDetails(code: string){
    console.log(code)
    this.router.navigate(['pages/ui-features/funddetails', code]);
  }

  fundSearch(searchValue: string) {
    this.funds = this.fundService.searchfund("",this.fundcode);
  }
}