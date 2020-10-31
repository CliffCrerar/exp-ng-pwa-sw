import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStdLandingComponent } from './ng-std-landing.component';

describe('NgStdLandingComponent', () => {
  let component: NgStdLandingComponent;
  let fixture: ComponentFixture<NgStdLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgStdLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStdLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
