import { FirstPageComponent } from './first-page/first-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';

export const appRoutes: Routes = [
    { path: 'first-page', component: FirstPageComponent },
    { path: 'second-page', component: SecondPageComponent },
    { path: 'third-page', component: ThirdPageComponent }
  ]