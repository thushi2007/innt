import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezeptdetailComponent } from './rezeptdetail.component';

describe('RezeptdetailComponent', () => {
  let component: RezeptdetailComponent;
  let fixture: ComponentFixture<RezeptdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezeptdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RezeptdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
