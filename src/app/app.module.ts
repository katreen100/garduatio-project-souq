import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-module/product-card/product-card.component';
import { ProductGridComponent } from './product-module/product-grid/product-grid.component';
import { ReviewCardComponent } from './reviewCard/reviewCard.component';
import { ProductInfoComponent } from './productInfo/productInfo.component';
import { ReviewsListComponent } from './reviewsList/reviewsList.component';
import{OneProductCompComponent} from './productComp/oneProductComp/oneProductComp.component';
import {FreeShipppingmodalComponent } from './lay out/freeShipppingmodal/freeShipppingmodal.component'
import {ProductgallaryComponent} from "./lay out/productgallary/productgallary.component"
import { RateComponentComponent } from './Components/rate-component/avg/rate-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RateStaticsComponent } from './Components/rate-component/rate-statics/rate-statics.component';
import { UserRateComponent } from './Components/rate-component/user-rate/user-rate.component';
import { ProductRateComponent } from './Components/rate-component/product-rate/product-rate.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { FilterationComponent } from './Components/filteration/filteration.component';
import { RegisterFormComponent } from './Components/register-form/register-form.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CategoryComponent } from './Components/category/category.component';
import { BrandComponent } from './Components/brand/brand.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { SupportAndSocialLinksComponent } from './Components/support-and-social-links/support-and-social-links.component';
import { FooterMyAccountComponent } from './Components/footer-my-account/footer-my-account.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { TopHeaderComponent } from './Components/header/top-header/top-header.component';
import { LoginComponent } from './lay out/User/login/login.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HomeLayloutComponent } from './Components/home-laylout/home-laylout.component';
import { SearchComponent } from './Components/search/search.component';
import { ProductPageComponent } from './Components/product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductGridComponent,
    OneProductCompComponent,
    FreeShipppingmodalComponent,
    ProductgallaryComponent,
    RateComponentComponent,
    RateStaticsComponent,
    UserRateComponent,
    ProductRateComponent,
    ReviewCardComponent,
    ProductInfoComponent,
    ReviewsListComponent,
    FilterationComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    BrandComponent,
    NotFoundComponent,
    SupportAndSocialLinksComponent,
    FooterMyAccountComponent,
    SidebarComponent,
    TopHeaderComponent,
    LoginComponent
    RegisterFormComponent,
    HomeLayloutComponent,
    SearchComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    NgbModule,
    NgxSliderModule,
    FormsModule,
    AngularFireAuthModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
