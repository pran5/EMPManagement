import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsidenavComponent } from './msidenav.component';

describe('MsidenavComponent', () => {
  let component: MsidenavComponent;
  let fixture: ComponentFixture<MsidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
