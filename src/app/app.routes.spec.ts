import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {routes} from './app.routes';
import {AppComponent} from './app.component';
import {FeastUnitTestingComponent} from './components/feast-unit-testing/feast-unit-testing.component';
import {InfoComponent} from './components/info/info.component';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe("App Routing", () => {
  let router: Router;
  let fixture: ComponentFixture<AppComponent>;
  let location: Location;
  let homeFixture: ComponentFixture<FeastUnitTestingComponent>;
  let homeElement: DebugElement;
  let infoFixture: ComponentFixture<InfoComponent>;
  let infoElement: DebugElement;

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
    homeFixture = TestBed.createComponent(FeastUnitTestingComponent);
    homeElement = homeFixture.debugElement;
    infoFixture = TestBed.createComponent(InfoComponent);
    infoElement = infoFixture.debugElement;
  })

  it("should navigate to /home", waitForAsync(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/home');
    })
  }))

  it("should navigate to /info from homepage", waitForAsync(() => {
    homeFixture.detectChanges();
    let links = homeElement.queryAll(By.css('a'));
    links[0].nativeElement.click();
    homeFixture.whenStable().then(() => {
      expect(location.path()).toBe('/info');
    })
  }))

  it("should navigate to /home from infopage", waitForAsync(() => {
    infoFixture.detectChanges();
    let links = infoElement.queryAll(By.css('button'));
    links[0].nativeElement.click();
    infoFixture.whenStable().then(() => {
      expect(location.path()).toBe('/home');
    })
  }))


})
