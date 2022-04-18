import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
} from '@nebular/theme';

import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TablesModule } from '../tables/tables.module';

import { CountryOrdersComponent } from '../../components/country-orders/country-orders.component';
import { CountryOrdersMapComponent } from '../../components/country-orders/map/country-orders-map.component';
import { CountryOrdersMapService } from '../../components/country-orders/map/country-orders-map.service';
import { CountryOrdersChartComponent } from '../../components/country-orders/chart/country-orders-chart.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ChartModule } from 'angular2-chartjs';


@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    Ng2SmartTableModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbTabsetModule,
    NbUserModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    TablesModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
    ChartModule,
  ],
  declarations: [
    DashboardComponent,
    SmartTableComponent,
    ContactsComponent,
    CountryOrdersComponent,
    CountryOrdersMapComponent,
    CountryOrdersChartComponent,
  ],
  providers: [
    CountryOrdersMapService,
  ],
})
export class DashboardModule { }
