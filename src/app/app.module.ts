import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './auth.interceptor';
import { AdminDashboardComponent } from './Pages/Admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './Pages/User/user-dashboard/user-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateVendorComponent } from './Pages/Admin/create-vendor/create-vendor.component';
import { CreateLaptopComponent } from './Pages/Admin/create-laptop/create-laptop.component';
import { VendorListComponent } from './Pages/Admin/vendor-list/vendor-list.component';
import { LaptopListComponent } from './Pages/Admin/laptop-list/laptop-list.component';
import { VendorUpdateComponent } from './Pages/Admin/vendor-update/vendor-update.component';
import { VendorDetailsComponent } from './Pages/Admin/vendor-details/vendor-details.component';
import { LaptopUpdateComponent } from './Pages/Admin/laptop-update/laptop-update.component';
import { LaptopDetailsComponent } from './Pages/Admin/laptop-details/laptop-details.component';
import { LaptopByVendorComponent } from './Pages/Admin/laptop-by-vendor/laptop-by-vendor.component';
import { LaptopListUserComponent } from './Pages/User/laptop-list-user/laptop-list-user.component';
import { VendorListUserComponent } from './Pages/User/vendor-list-user/vendor-list-user.component';
import { VendorDetailsUserComponent } from './Pages/User/vendor-details-user/vendor-details-user.component';
import { LaptopDetailsUserComponent } from './Pages/User/laptop-details-user/laptop-details-user.component';
import { LaptopByVendorUserComponent } from './Pages/User/laptop-by-vendor-user/laptop-by-vendor-user.component';
import { RoutingStateUserService } from './Services/User/routing-state-user.service';
import { LaptopByNameComponent } from './Pages/Admin/laptop-by-name/laptop-by-name.component';
import { LaptopByNameUserComponent } from './Pages/User/laptop-by-name-user/laptop-by-name-user.component';
import { SearchLaptopComponent } from './Pages/Admin/search-laptop/search-laptop.component';
import { SearchLaptopUserComponent } from './Pages/User/search-laptop-user/search-laptop-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    NavbarComponent,
    CreateVendorComponent,
    CreateLaptopComponent,
    VendorListComponent,
    LaptopListComponent,
    VendorUpdateComponent,
    VendorDetailsComponent,
    LaptopUpdateComponent,
    LaptopDetailsComponent,
    LaptopByVendorComponent,
    LaptopListUserComponent,
    VendorListUserComponent,
    VendorDetailsUserComponent,
    LaptopDetailsUserComponent,
    LaptopByVendorUserComponent,
    LaptopByNameComponent,
    LaptopByNameUserComponent,
    SearchLaptopComponent,
    SearchLaptopUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule

    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}, RoutingStateUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
function appRoutes(appRoutes: any): any[] | import("@angular/core").Type<any> {
  throw new Error('Function not implemented.');
}

