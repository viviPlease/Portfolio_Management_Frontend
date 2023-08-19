import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiFeaturesComponent } from './ui-features.component';
import { GridComponent } from './grid/grid.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { SearchComponent } from './search-fields/search-fields.component';
import { FundDetailsComponent } from './fund-details/fund-details.component';

const routes: Routes = [{
  path: '',
  component: UiFeaturesComponent,
  children: [ {
    path: 'grid',
    component: GridComponent,
  }, {
    path: 'icons',
    component: IconsComponent,
  }, 
  // {
  //   path: 'typography',
  //   component: TypographyComponent,
  // }, 
  {
    path: 'search-fields',
    component: SearchComponent,
  },
  {
    path:'typography/:ticker', component: TypographyComponent,
  },
  {
    path:'funddetails/:code', component: FundDetailsComponent,
  }
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiFeaturesRoutingModule { }
