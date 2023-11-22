import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheaterSearchBarComponent } from './wheater-search-bar.component';

describe('WheaterSearchBarComponent', () => {
  let component: WheaterSearchBarComponent;
  let fixture: ComponentFixture<WheaterSearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WheaterSearchBarComponent]
    });
    fixture = TestBed.createComponent(WheaterSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
