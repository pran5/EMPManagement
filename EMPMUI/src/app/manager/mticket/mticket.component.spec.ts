import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTicketComponent } from './mticket.component';

describe('MTicketComponent', () => {
  let component: MTicketComponent;
  let fixture: ComponentFixture<MTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
