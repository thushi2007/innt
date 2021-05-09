import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezeptdetailohnezutatenComponent } from './rezeptdetailohnezutaten.component';

describe('RezeptdetailohnezutatenComponent', () => {
  let component: RezeptdetailohnezutatenComponent;
  let fixture: ComponentFixture<RezeptdetailohnezutatenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezeptdetailohnezutatenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RezeptdetailohnezutatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
