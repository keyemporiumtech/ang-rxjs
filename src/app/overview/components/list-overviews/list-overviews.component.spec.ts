import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOverviewsComponent } from './list-overviews.component';

describe('ListOverviewsComponent', () => {
  let component: ListOverviewsComponent;
  let fixture: ComponentFixture<ListOverviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOverviewsComponent]
    });
    fixture = TestBed.createComponent(ListOverviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
