import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { OneProductCompComponent } from './productComp/oneProductComp/oneProductComp.component';

const routes: Routes = [
  // {path:"freeShipppingDetails",component: OneProductCompComponent},
  {path:"home",component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
