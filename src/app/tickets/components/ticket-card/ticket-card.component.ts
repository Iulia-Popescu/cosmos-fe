import {Component, Input} from '@angular/core';
import {Ticket} from '../../models/ticket.model';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss']
})
export class TicketCardComponent {
  @Input() ticket: Ticket | undefined;

  public grid: number[][];

  constructor() {
    this.grid = [];
    let counter = 1;
    for (let i = 0; i < 7; i++) {
      this.grid[i] = [];
      for (let j = 0; j < 7; j++) {
        this.grid[i][j] = counter++;
      }
    }
  }
}
