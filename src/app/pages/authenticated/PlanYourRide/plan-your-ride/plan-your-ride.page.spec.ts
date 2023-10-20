import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanYourRidePage } from './plan-your-ride.page';

describe('PlanYourRidePage', () => {
  let component: PlanYourRidePage;
  let fixture: ComponentFixture<PlanYourRidePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlanYourRidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
