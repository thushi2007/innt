import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperBaseCompComponent } from './stepper-base-comp.component';

describe('StepperBaseCompComponent', () => {
  let component: StepperBaseCompComponent;
  let fixture: ComponentFixture<StepperBaseCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperBaseCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperBaseCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
