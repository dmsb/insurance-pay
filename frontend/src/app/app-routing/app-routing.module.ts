import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: "full"},
  { path: 'contracts', loadChildren: '../contracts/contracts.module#ContractsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,
    { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
