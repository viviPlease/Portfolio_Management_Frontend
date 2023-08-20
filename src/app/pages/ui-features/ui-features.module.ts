import { NgModule } from '@angular/core';
import { NbAlertModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbPopoverModule, NbSearchModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { UiFeaturesRoutingModule } from './ui-features-routing.module';
import { UiFeaturesComponent } from './ui-features.component';
import { GridComponent } from './grid/grid.component';
import { FundDetailsComponent } from './fund-details/fund-details.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { SearchComponent } from './search-fields/search-fields.component';

const components = [
  UiFeaturesComponent,
  GridComponent,
  FundDetailsComponent,
  IconsComponent,
  TypographyComponent,
  SearchComponent,
];

@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    NbPopoverModule,
    NbSearchModule,
    NbIconModule,
    NbAlertModule,
    ThemeModule,
    UiFeaturesRoutingModule,
    NbInputModule,
  ],
  declarations: [
    ...components,
  ],
})
export class UiFeaturesModule { }
