import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{OneProductCompComponent} from './productComp/oneProductComp/oneProductComp.component';
import {FreeShipppingmodalComponent } from './lay out/freeShipppingmodal/freeShipppingmodal.component'

@NgModule({
  declarations: [
    AppComponent,
    OneProductCompComponent,
    FreeShipppingmodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
