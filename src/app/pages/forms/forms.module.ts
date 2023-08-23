import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbPopoverModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { MyFundsComponent } from './my-funds/my-funds.component';
import { MyFundsTradeComponent } from './my-funds-trade/my-funds-trade.component';
import { ChartModule } from 'angular2-chartjs';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    ChartModule,
    NgxChartsModule,
    NbPopoverModule,
    ThemeModule,
    NbInputModule,
    ChartModule
  ],
  declarations: [
    FormsComponent,
    ButtonsComponent,
    FormInputsComponent,
    FormLayoutsComponent,
    DatepickerComponent,
    MyFundsComponent,
    MyFundsTradeComponent
  ],
})
export class FormsModule { }
