import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezeptorderComponent } from './rezeptorder.component';

describe('RezeptorderComponent', () => {
  let component: RezeptorderComponent;
  let fixture: ComponentFixture<RezeptorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezeptorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RezeptorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
