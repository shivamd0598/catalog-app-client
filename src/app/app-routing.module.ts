import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './Guards/admin.guard';
import { UserGuard } from './Guards/user.guard';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './Pages/Admin/admin-dashboard/admin-dashboard.component';
import { CreateLaptopComponent } from './Pages/Admin/create-laptop/create-laptop.component';
import { CreateVendorComponent } from './Pages/Admin/create-vendor/create-vendor.component';
import { LaptopByNameComponent } from './Pages/Admin/laptop-by-name/laptop-by-name.component';
import { LaptopByVendorComponent } from './Pages/Admin/laptop-by-vendor/laptop-by-vendor.component';
import { LaptopDetailsComponent } from './Pages/Admin/laptop-details/laptop-details.component';
import { LaptopListComponent } from './Pages/Admin/laptop-list/laptop-list.component';
import { LaptopUpdateComponent } from './Pages/Admin/laptop-update/laptop-update.component';
import { SearchLaptopComponent } from './Pages/Admin/search-laptop/search-laptop.component';
import { VendorDetailsComponent } from './Pages/Admin/vendor-details/vendor-details.component';
import { VendorListComponent } from './Pages/Admin/vendor-list/vendor-list.component';
import { VendorUpdateComponent } from './Pages/Admin/vendor-update/vendor-update.component';
import { LaptopByNameUserComponent } from './Pages/User/laptop-by-name-user/laptop-by-name-user.component';
import { LaptopByVendorUserComponent } from './Pages/User/laptop-by-vendor-user/laptop-by-vendor-user.component';
import { LaptopDetailsUserComponent } from './Pages/User/laptop-details-user/laptop-details-user.component';
import { LaptopListUserComponent } from './Pages/User/laptop-list-user/laptop-list-user.component';
import { SearchLaptopUserComponent } from './Pages/User/search-laptop-user/search-laptop-user.component';
import { UserDashboardComponent } from './Pages/User/user-dashboard/user-dashboard.component';
import { VendorDetailsUserComponent } from './Pages/User/vendor-details-user/vendor-details-user.component';
import { VendorListUserComponent } from './Pages/User/vendor-list-user/vendor-list-user.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path:'user-dashboard', component: UserDashboardComponent, pathMatch:'full',canActivate:[UserGuard]},
  {path:'vendor-list-user', component: VendorListUserComponent, pathMatch:'full',canActivate:[UserGuard]},
  {path:'vendor-details-user/:id', component: VendorDetailsUserComponent, pathMatch:'full',canActivate:[UserGuard]},
  {path:'laptop-list-user', component: LaptopListUserComponent, pathMatch:'full',canActivate:[UserGuard]},
  {path:'laptop-details-user/:id', component: LaptopDetailsUserComponent, pathMatch:'full',canActivate:[UserGuard]},
  {path:'laptop-by-vendor-user', component: LaptopByVendorUserComponent, pathMatch:'full',canActivate:[UserGuard]},
  {path:'laptop-by-name-user', component: LaptopByNameUserComponent, pathMatch:'full',canActivate:[UserGuard]},
//  {path: 'search-laptop-user',component:SearchLaptopUserComponent,pathMatch:'full',canActivate:[AdminGuard]},
  {path: 'admin',component:AdminDashboardComponent,pathMatch:'full',canActivate:[AdminGuard]},
  {path: 'search-laptop',component:SearchLaptopComponent,pathMatch:'full'},
  {path:'add-vendor', component: CreateVendorComponent, pathMatch:'full',canActivate:[AdminGuard]},
  {path:'add-laptop', component: CreateLaptopComponent, pathMatch:'full',canActivate:[AdminGuard]},
  {path:'vendor-list', component: VendorListComponent, pathMatch:'full',canActivate:[AdminGuard]},
  {path:'laptop-list', component: LaptopListComponent, pathMatch:'full',canActivate:[AdminGuard]},
  {path:'vendor-update/:id', component: VendorUpdateComponent, pathMatch:'full',canActivate:[AdminGuard]},
  {path:'laptop-update/:id', component: LaptopUpdateComponent, pathMatch:'full',canActivate:[AdminGuard]},
  {path:'vendor-details/:id', component: VendorDetailsComponent, pathMatch:'full',canActivate:[AdminGuard]},
  {path:'laptop-details/:id', component: LaptopDetailsComponent, pathMatch:'full',canActivate:[AdminGuard]},
  {path:'laptop-by-vendor', component: LaptopByVendorComponent, pathMatch:'full',canActivate:[AdminGuard]},
  {path:'laptop-by-name', component: LaptopByNameComponent, pathMatch:'full',canActivate:[AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
