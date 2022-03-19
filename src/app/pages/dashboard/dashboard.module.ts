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
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { ContactsComponent } from './contacts/contacts.component';

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
  ],
  declarations: [
    DashboardComponent,
    SmartTableComponent,
    ContactsComponent,
  ],
})
export class DashboardModule { }
