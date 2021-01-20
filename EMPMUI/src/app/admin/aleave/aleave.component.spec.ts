import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AleaveComponent } from './aleave.component';

describe('AleaveComponent', () => {
  let component: AleaveComponent;
  let fixture: ComponentFixture<AleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AleaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
