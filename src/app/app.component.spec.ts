import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>
  let el: DebugElement;
  let component: AppComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent)
      el = fixture.debugElement;
      component = fixture.componentInstance
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'feast-test' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('feast-test');
  });

  // it('should render button with text subscribe', () => {
  //   component.isSubscribed = false;
  //   fixture.detectChanges();
  //   const buttonEle = el.queryAll(By.css('.subscribe'));
  //   expect(buttonEle[0].nativeElement.disabled).toBeFalse();
  // })

  // it('should render button with text subscribed and disabled', () => {
  //   component.isSubscribed = false;
  //   fixture.detectChanges();
  //   let buttonEle = el.queryAll(By.css('.subscribe'));
  //   buttonEle[0].nativeElement.click();
  //   fixture.detectChanges();
  //   buttonEle = el.queryAll(By.css('.subscribe'));
  //   expect(buttonEle[0].nativeElement.disabled).toBeTrue();
  // })

  it('should render button with text subscribed and disabled', fakeAsync(() => {
    component.isSubscribed = false;
    fixture.detectChanges();
    let buttonEle = el.queryAll(By.css('.subscribe'));
    buttonEle[0].nativeElement.click();


    setTimeout(() => {
      console.log('executed after 8 seconds')
    }, 8000)

    setTimeout(() => {
      fixture.detectChanges();
      buttonEle = el.queryAll(By.css('.subscribe'));
       
    }, 3000)

    // flush();

    tick(3000)
    expect(buttonEle[0].nativeElement.disabled).toBeTrue(); 
    tick(5000)
     }))

});
