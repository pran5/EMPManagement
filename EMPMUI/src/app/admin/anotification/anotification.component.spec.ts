import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotificationComponent } from './anotification.component';

describe('AnotificationComponent', () => {
  let component: AnotificationComponent;
  let fixture: ComponentFixture<AnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
