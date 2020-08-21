import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {UserdashboardComponent} from './components/userdashboard/userdashboard.component'

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'home',component:UserdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
