import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TicketsListComponent } from './components/tickets-list/tickets-list.component';
import { TicketDetailsComponent } from '../tickets/components/ticket-details/ticket-details.component';

const routes: Routes = [
  {
    path: '',
    component: TicketsListComponent,
  },
  {
    path: 'tickets/:id',
    component: TicketDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TicketsRoutingModule { }
