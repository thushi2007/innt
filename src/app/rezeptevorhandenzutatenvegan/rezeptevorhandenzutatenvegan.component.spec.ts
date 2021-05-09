import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezeptevorhandenzutatenveganComponent } from './rezeptevorhandenzutatenvegan.component';

describe('RezeptevorhandenzutatenveganComponent', () => {
  let component: RezeptevorhandenzutatenveganComponent;
  let fixture: ComponentFixture<RezeptevorhandenzutatenveganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezeptevorhandenzutatenveganComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RezeptevorhandenzutatenveganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
