import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {catchError, Observable, of} from 'rxjs';
import {Ticket} from '../models/ticket.model';
import {Frequency} from '../models/frequency.model';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  private readonly API_URL = 'http://localhost:3000/api';
  constructor(private httpClient: HttpClient) { }

  public createTicket(
    ticket: Pick<Ticket, 'numberOfBoxes' | 'hasSuperzahl'>
  ): Observable<Ticket | undefined> {
    return this.httpClient
      .post<Ticket>(`${this.API_URL}/ticket`, {
        numberOfBoxes: ticket.numberOfBoxes,
        hasSuperzahl: ticket.hasSuperzahl,
      })
      .pipe(
        catchError((error) => {
          return of(undefined);
        })
      );
  }

  public getTicketsPage(page: number, pageSize: number): Observable<any> { // TODO define the response type
    return this.httpClient
      .get<any>(`${this.API_URL}/tickets-page`, {
        params: {
          page: page.toString(),
          pageSize: pageSize.toString()
        }
      })
      .pipe(
        catchError(() => {
          return of([]);
        })
      );
  }

  public getTicketDetails(id: string): Observable<Ticket | undefined> { // TODO define the response type
    return this.httpClient
      .get<Ticket>(`${this.API_URL}/ticket/${id}`)
      .pipe(
        catchError(() => {
          return of(undefined);
        })
      );

  }

  public getFrequency(): Observable<Frequency | undefined> { // TODO define the response type
    return this.httpClient
      .get<any>(`${this.API_URL}/frequency`)
      .pipe(
        catchError(() => {
          return of(undefined);
        })
      );
  }
}
