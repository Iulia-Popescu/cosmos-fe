import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsComponent } from 'src/app/tickets/tickets.component';

describe('MainContainerComponent', () => {
  let component: TicketsComponent;
  let fixture: ComponentFixture<TicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketsComponent]
    });
    fixture = TestBed.createComponent(TicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
