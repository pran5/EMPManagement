import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MProjectprogressComponent } from './mprojectprogress.component';

describe('MProjectprogressComponent', () => {
  let component: MProjectprogressComponent;
  let fixture: ComponentFixture<MProjectprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MProjectprogressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MProjectprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
