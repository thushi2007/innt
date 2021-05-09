import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesnotificationComponent } from './cookiesnotification.component';

describe('CookiesnotificationComponent', () => {
  let component: CookiesnotificationComponent;
  let fixture: ComponentFixture<CookiesnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookiesnotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiesnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
