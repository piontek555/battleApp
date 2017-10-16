import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStatsComponent } from './show-stats.component';

describe('ShowStatsComponent', () => {
  let component: ShowStatsComponent;
  let fixture: ComponentFixture<ShowStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
