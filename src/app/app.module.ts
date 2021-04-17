import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-module/product-card/product-card.component';
import { ProductGridComponent } from './product-module/product-grid/product-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
