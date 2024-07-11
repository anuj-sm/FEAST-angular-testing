import { Routes } from '@angular/router';
import {FeastUnitTestingComponent} from './components/feast-unit-testing/feast-unit-testing.component';
import {InfoComponent} from './components/info/info.component';

export const routes: Routes = [
  {
    path: "", redirectTo: "home", pathMatch: "full"
  },
  {
    path: "home", component: FeastUnitTestingComponent
  },
  {
    path: "info", component: InfoComponent
  }
];
