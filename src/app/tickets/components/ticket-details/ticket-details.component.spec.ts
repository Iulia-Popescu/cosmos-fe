import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDetailsComponent } from 'src/app/tickets/components/ticket-card/ticket-details.component';

describe('TicketCardComponent', () => {
  let component: TicketDetailsComponent;
  let fixture: ComponentFixture<TicketDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketDetailsComponent]
    });
    fixture = TestBed.createComponent(TicketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
