import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { MyFundsComponent } from './my-funds/my-funds.component';
import { MyFundsTradeComponent } from './my-funds-trade/my-funds-trade.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'inputs',
        component: FormInputsComponent,
      },
      {
        path: 'myfunds',
        component: MyFundsComponent,
      },
      {
        path: 'myfundstrade',
        component: MyFundsTradeComponent,
      },
      {
        path: 'layouts/:ticker',
        component: FormLayoutsComponent,
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
      },
      {
        path: 'datepicker/:code',
        component: DatepickerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {
}

