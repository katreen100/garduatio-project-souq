import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrandComponent } from './Components/brand/brand.component';
import { CategoryComponent } from './Components/category/category.component';
import { HomeLayloutComponent } from './Components/home-laylout/home-laylout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { RegisterFormComponent } from './Components/register-form/register-form.component';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { SearchComponent } from './Components/search/search.component';
import { LoginComponent } from './lay out/User/login/login.component';
import { ProductGridComponent } from './product-module/product-grid/product-grid.component';
import { OneProductCompComponent } from './productComp/oneProductComp/oneProductComp.component';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:'full'}, // Home component should be here
  {path:"home",component: HomeLayloutComponent}, // Home component should be here
  {path:"freeShipppingDetails",component: OneProductCompComponent},
  {path:"category/:catName",component: CategoryComponent},   //Routing to category component and this component will expect the category name
  {path:"category",component: ProductGridComponent}, //Routing to Brand component and this component will expect the brand name
  {path:"brand/:brandName",component: BrandComponent}, //Routing to Brand component and this component will expect the brand name
  {path:"user/register",component: RegisterFormComponent},
  {path:"search-result/:searchParam",component: SearchComponent},
  {path:"productPage/:prdsku",component: ProductPageComponent},
  // {path:"user/register",component: AppComponent},
  {path:"user/login",component: LoginComponent},
  // {path:"user/account-settings",component: AppComponent},
  // {path:"user/account-summary",component: AppComponent},
  // {path:"FAQS-summary",component: AppComponent},
  {path:"orders",component: AppComponent},
  {path:"addresses",component: AppComponent},
  {path:"wishlist",component: AppComponent},
  {path:"cart",component: AppComponent},
  {path:"addresses",component: AppComponent},
  {path:"**",component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
