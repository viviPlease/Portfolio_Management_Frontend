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
    // this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];
    
    // this.employeeService.getEmployee(this.name)
    //   .subscribe(data => {
    //     console.log(data)
    //     this.employee = data;
    //   }, error => console.log(error));
  }

  // updateEmployee() {
  //   this.employeeService.updateEmployee(this.name, this.employee)
  //     .subscribe(data => {
  //       console.log(data);
  //       this.employee = new Employee();
  //       this.gotoList();
  //     }, error => console.log(error));
  // }

  // onSubmit() {
  //   this.updateEmployee();    
  // }

  // gotoList() {
  //   this.router.navigate(['/employees']);
  // }
  gotoRefrash() {
    console.log(3333333)
    this.router.navigate(['/dashboard']);
  }

}

