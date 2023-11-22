import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAppSiteComponent } from './weather-app-site.component';

describe('WeatherAppSiteComponent', () => {
  let component: WeatherAppSiteComponent;
  let fixture: ComponentFixture<WeatherAppSiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherAppSiteComponent]
    });
    fixture = TestBed.createComponent(WeatherAppSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
