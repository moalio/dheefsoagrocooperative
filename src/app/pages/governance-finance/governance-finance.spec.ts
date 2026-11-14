import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovernanceFinance } from './governance-finance';

describe('GovernanceFinance', () => {
  let component: GovernanceFinance;
  let fixture: ComponentFixture<GovernanceFinance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovernanceFinance],
    }).compileComponents();

    fixture = TestBed.createComponent(GovernanceFinance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
