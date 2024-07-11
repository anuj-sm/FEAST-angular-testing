import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {routes} from './app.routes';
import {AppComponent} from './app.component';
import {FeastUnitTestingComponent} from './components/feast-unit-testing/feast-unit-testing.component';
import {InfoComponent} from './components/info/info.component';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

describe("App Routing", () => {
  let router: Router;
  let fixture: ComponentFixture<AppComponent>;
  let location: Location;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes),AppComponent, FeastUnitTestingComponent, InfoComponent],
    }).compileComponents();
  }))

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
    fixture = TestBed.createComponent(AppComponent);
  })

  it("should navigate to home page", waitForAsync(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/home');
    });
  }));

})
