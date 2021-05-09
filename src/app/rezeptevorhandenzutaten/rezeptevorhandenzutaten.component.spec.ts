import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezeptevorhandenzutatenComponent } from './rezeptevorhandenzutaten.component';

describe('RezeptevorhandenzutatenComponent', () => {
  let component: RezeptevorhandenzutatenComponent;
  let fixture: ComponentFixture<RezeptevorhandenzutatenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezeptevorhandenzutatenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RezeptevorhandenzutatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
