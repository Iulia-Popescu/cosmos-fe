import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';

import {BehaviorSubject, map, Observable, switchMap, tap} from 'rxjs';

import {Ticket} from '../../models/ticket.model';
import {TicketsService} from '../../services/tickets.service';
import {Frequency} from '../../models/frequency.model';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import {MatSnackBar} from '@angular/material/snack-bar';
import {tick} from '@angular/core/testing';

PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.scss']
})
export class TicketsListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('histogram') histogram: any;

  public graph: {
    data: {
      x: number[];
      y: number[];
      type: string;
      xbins: {
          end: number;
          size: number;
          start: number;
      },
    }[],
    layout: {
      width: number;
      height: number;
      title: string;
      xaxis: {title: string};
      yaxis: {title: string};
    }
  } = {
    data: [{
      x: [],
      y: [],
      type: "bar",
      xbins: {
          end: 49,
          size: 49,
          start: 1
      }
    }],
    layout: {
      width: 1400,
      height: 540,
      title: 'Histogram',
      xaxis: {title: "Numbers"},
      yaxis: {title: "Frequency"}},
  };

  private ticketSubject = new BehaviorSubject<Ticket | null>(null);

  public numberOfBoxesControl: FormControl;
  public hasSuperzahlControl: FormControl;
  public fg: FormGroup;

  public ticket$: Observable<Ticket | null> = this.ticketSubject.asObservable();
  public dataSource: MatTableDataSource<Ticket[]> = new MatTableDataSource();
  public columnsToDisplay: string[] = ['id', 'numberOfBoxes', 'hasSuperzahl'];

  public pageSize = 5;
  public pageIndex = 0;
  public paginatorLength = 0;
  public currentPage = 0;

  constructor(
    private readonly ticketsService: TicketsService,
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly _snackBar: MatSnackBar
  ) {
    this.numberOfBoxesControl = new FormControl('', [Validators.pattern(/^[0-9]+$/), Validators.required, Validators.min(1), Validators.max(20)]);
    this.hasSuperzahlControl = new FormControl('');
    this.fg = this.fb.group({
      numberOfBoxes: this.numberOfBoxesControl,
      hasSuperzahl: this.hasSuperzahlControl
    });
  }

  ngOnInit(): void {
    this.ticketsService
      .getFrequency()
      .subscribe((frequency) => {
        this.graph.data[0].x = Array(49).fill(0).map((_, i) => i + 1);
        this.graph.data[0].y = frequency?.counter || [];
      });

    this.getTicketsPage();
  }

  private getTicketsPage(): void {
    this.ticketsService
      .getTicketsPage(this.currentPage + 1, this.pageSize)
      .subscribe((response) => {
        this.dataSource = response.data;
        this.paginatorLength = response.totalItems;
        this.currentPage = response.page - 1;
    });
  }

  public createTicket(): void {
    this.ticketsService.createTicket({
      numberOfBoxes: this.numberOfBoxesControl.value,
      hasSuperzahl: this.hasSuperzahlControl.value
    })
      .pipe(
        map((ticket: Ticket | undefined) => this.ticketSubject.next(ticket || null)),
        switchMap( () => this.ticketsService.getTicketsPage(this.currentPage + 1, this.pageSize))
      )
      .subscribe((response) => {
        this.dataSource = response.data;
        this.paginatorLength = response.totalItems;
        this.currentPage = response.page - 1;
        this._snackBar.open('Ticket created', 'Close', {
          duration: 3000
        });
      });
  }

  public onPageChange(event: any) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getTicketsPage();
  }

  public onRowClick(ticket: Ticket) {
    this.router.navigate(['/tickets', ticket.id]);
  }
}
