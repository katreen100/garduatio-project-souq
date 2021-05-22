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
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { OrdersComponent } from './user/orders/orders.component';
import { WishlistComponent } from './user/wishlist/wishlist.component';
import { AddressesComponent } from './user/addresses/addresses.component';
import { SettingsComponent } from './user/settings/settings.component';
import { CartComponent } from './user/cart/cart.component';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:'full'}, // Home component should be here
  {path:"home",component: HomeLayloutComponent}, // Home component should be here
  {path:"freeShippingDetails",component: OneProductCompComponent},
  {path:"category/:catName",component: CategoryComponent},   //Routing to category component and this component will expect the category name
  {path:"category",component: ProductGridComponent}, //Routing to Brand component and this component will expect the brand name
  {path:"brand/:brandName",component: BrandComponent}, //Routing to Brand component and this component will expect the brand name
  {path:"search-result/:searchParam",component: SearchComponent},
  // {path:"productPage/:parentProductId/:variantId",component: ProductPageComponent},
  {path:"productPage/:parentProductId/:variantId",component: OneProductCompComponent},
  // {path:"user/register",component: AppComponent},
  { path:"login",component: LoginComponent },
  { path:"register",component: RegisterFormComponent },
  { path: "logout", redirectTo: "/home", pathMatch: 'full' },
  { path: "cart", component:  CartComponent},
  { 
    path: "dashboard",
    component: UserDashboardComponent,
    children: [
      { path: "orders", component: OrdersComponent },
      { path: "wishlist", component: WishlistComponent },
      { path: "addresses", component: AddressesComponent },
      { path: "settings", component: SettingsComponent }
    ]
  },
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
  imports: [RouterModule.forRoot(routes, { enableTracing: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
