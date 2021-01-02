import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DazzlingDebtComponent } from './dazzling-debt.component';

describe('DazzlingDebtComponent', () => {
  let component: DazzlingDebtComponent;
  let fixture: ComponentFixture<DazzlingDebtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DazzlingDebtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DazzlingDebtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
