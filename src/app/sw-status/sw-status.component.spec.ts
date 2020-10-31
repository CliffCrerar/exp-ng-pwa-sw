import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwStatusComponent } from './sw-status.component';

describe('SwStatusComponent', () => {
  let component: SwStatusComponent;
  let fixture: ComponentFixture<SwStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
