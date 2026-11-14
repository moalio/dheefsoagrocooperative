import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImpactSustainability } from './impact-sustainability';

describe('ImpactSustainability', () => {
  let component: ImpactSustainability;
  let fixture: ComponentFixture<ImpactSustainability>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpactSustainability],
    }).compileComponents();

    fixture = TestBed.createComponent(ImpactSustainability);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
