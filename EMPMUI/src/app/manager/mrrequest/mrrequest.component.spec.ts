import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MRRequestComponent } from './mrrequest.component';

describe('MRRequestComponent', () => {
  let component: MRRequestComponent;
  let fixture: ComponentFixture<MRRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MRRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MRRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
