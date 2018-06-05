import { FirstPageComponent } from './first-page/first-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { AuthGuard } from './core/auth.guard';
import { LoginComponent } from './login/login.component';

export const appRoutes: Routes = [
    { path: 'first-page', component: FirstPageComponent },
    { path: 'second-page', component: SecondPageComponent, canActivate: [AuthGuard] },
    { path: 'third-page', component: ThirdPageComponent },
    { path: 'login', component: LoginComponent }
  ]