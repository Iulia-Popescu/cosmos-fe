import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {PlotlyModule} from 'angular-plotly.js';

import {TicketsListComponent} from './components/tickets-list/tickets-list.component';
import {TicketsRoutingModule} from './tickets-routing.module';
import {TicketDetailsComponent} from '../tickets/components/ticket-details/ticket-details.component';
import { TicketCardComponent } from './components/ticket-card/ticket-card.component';

@NgModule({
  declarations: [
    TicketsListComponent,
    TicketDetailsComponent,
    TicketCardComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatGridListModule,
    MatFormFieldModule,
    PlotlyModule,
    MatSnackBarModule,
    MatIconModule,
    RouterLink,
  ],
})
export class TicketsModule { }
