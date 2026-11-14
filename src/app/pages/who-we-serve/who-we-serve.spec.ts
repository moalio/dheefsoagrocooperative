import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhoWeServe } from './who-we-serve';

describe('WhoWeServe', () => {
  let component: WhoWeServe;
  let fixture: ComponentFixture<WhoWeServe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoWeServe],
    }).compileComponents();

    fixture = TestBed.createComponent(WhoWeServe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
