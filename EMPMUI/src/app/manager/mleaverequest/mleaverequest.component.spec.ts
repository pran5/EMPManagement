import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MLeaverequestComponent } from './mleaverequest.component';

describe('MLeaverequestComponent', () => {
  let component: MLeaverequestComponent;
  let fixture: ComponentFixture<MLeaverequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MLeaverequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MLeaverequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
