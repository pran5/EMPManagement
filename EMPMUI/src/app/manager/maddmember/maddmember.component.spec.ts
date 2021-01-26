import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaddmemberComponent } from './maddmember.component';

describe('MaddmemberComponent', () => {
  let component: MaddmemberComponent;
  let fixture: ComponentFixture<MaddmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaddmemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaddmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
