import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FeastUnitTestingComponent} from './components/feast-unit-testing/feast-unit-testing.component';
import {InfoComponent} from './components/info/info.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppComponent,
    FeastUnitTestingComponent,
    InfoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
