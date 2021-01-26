import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsidenavComponent } from './esidenav.component';

describe('EsidenavComponent', () => {
  let component: EsidenavComponent;
  let fixture: ComponentFixture<EsidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
