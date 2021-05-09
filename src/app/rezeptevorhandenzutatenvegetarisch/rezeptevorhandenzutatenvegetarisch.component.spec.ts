import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezeptevorhandenzutatenvegetarischComponent } from './rezeptevorhandenzutatenvegetarisch.component';

describe('RezeptevorhandenzutatenvegetarischComponent', () => {
  let component: RezeptevorhandenzutatenvegetarischComponent;
  let fixture: ComponentFixture<RezeptevorhandenzutatenvegetarischComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezeptevorhandenzutatenvegetarischComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RezeptevorhandenzutatenvegetarischComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
