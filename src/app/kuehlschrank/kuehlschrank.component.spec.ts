import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KuehlschrankComponent } from './kuehlschrank.component';

describe('KuehlschrankComponent', () => {
  let component: KuehlschrankComponent;
  let fixture: ComponentFixture<KuehlschrankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KuehlschrankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KuehlschrankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
