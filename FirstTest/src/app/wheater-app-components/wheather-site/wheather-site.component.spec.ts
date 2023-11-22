import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheatherSiteComponent } from './wheather-site.component';

describe('WheatherSiteComponent', () => {
  let component: WheatherSiteComponent;
  let fixture: ComponentFixture<WheatherSiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WheatherSiteComponent]
    });
    fixture = TestBed.createComponent(WheatherSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
