import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhereWeWork } from './where-we-work';

describe('WhereWeWork', () => {
  let component: WhereWeWork;
  let fixture: ComponentFixture<WhereWeWork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhereWeWork],
    }).compileComponents();

    fixture = TestBed.createComponent(WhereWeWork);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
