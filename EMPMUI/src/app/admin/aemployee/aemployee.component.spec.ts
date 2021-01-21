import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AemployeeComponent } from './aemployee.component';

describe('AemployeeComponent', () => {
  let component: AemployeeComponent;
  let fixture: ComponentFixture<AemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
