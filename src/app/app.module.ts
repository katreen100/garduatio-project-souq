import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RateComponentComponent } from './Components/rate-component/avg/rate-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RateStaticsComponent } from './Components/rate-component/rate-statics/rate-statics.component';
import { UserRateComponent } from './Components/rate-component/user-rate/user-rate.component';
import { ProductRateComponent } from './Components/rate-component/product-rate/product-rate.component';
import { FilterationComponent } from './Components/filteration/filteration.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RateComponentComponent,
    RateStaticsComponent,
    UserRateComponent,
    ProductRateComponent,
    FilterationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxSliderModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
