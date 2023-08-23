import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Assets } from '../../../../domain/assets';
import { AssetsService } from '../../../../service/assets.service';

@Component({
  selector: 'ngx-chart-panel-summary',
  styleUrls: ['./chart-panel-summary.component.scss'],
  template: `
  `,
})
export class ChartPanelSummaryComponent implements OnInit {

  id!: number;
  assets: Assets;

  constructor(private route: ActivatedRoute,private router: Router,
    private assetsService: AssetsService) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

  }


  gotoRefrash() {
    console.log(3333333)
    this.router.navigate(['/dashboard']);
  }

}

