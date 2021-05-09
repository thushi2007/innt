import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezeptemitfehlendenzutatenComponent } from './rezeptemitfehlendenzutaten.component';

describe('RezeptemitfehlendenzutatenComponent', () => {
  let component: RezeptemitfehlendenzutatenComponent;
  let fixture: ComponentFixture<RezeptemitfehlendenzutatenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezeptemitfehlendenzutatenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RezeptemitfehlendenzutatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
