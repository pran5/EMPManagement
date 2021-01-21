import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AresourceComponent } from './aresource.component';

describe('AresourceComponent', () => {
  let component: AresourceComponent;
  let fixture: ComponentFixture<AresourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AresourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AresourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
