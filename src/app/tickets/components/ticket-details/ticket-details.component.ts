import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Ticket} from '../../models/ticket.model';
import {TicketsService} from '../../services/tickets.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit{
  public ticket: Ticket | undefined;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly ticketService: TicketsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const ticketId = params.get('id') || '';
      this.ticketService.getTicketDetails(ticketId).subscribe(data => {
        this.ticket = data;
      });
    });
  }
}
