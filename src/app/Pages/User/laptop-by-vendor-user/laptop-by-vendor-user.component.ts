import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Laptop } from 'src/app/Models/Laptop';
import { Vendor } from 'src/app/Models/Vendor';
import { AdminService } from 'src/app/Services/Admin/admin.service';
import { RoutingStateUserService } from 'src/app/Services/User/routing-state-user.service';

@Component({
  selector: 'app-laptop-by-vendor-user',
  templateUrl: './laptop-by-vendor-user.component.html',
  styleUrls: ['./laptop-by-vendor-user.component.css']
})
export class LaptopByVendorUserComponent implements OnInit {
  laptops:Laptop[];
  vendors:Vendor[];
  vendorId:number;
  isFormSubmitted:boolean=false;

  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.adminService.getVendors().subscribe((data:any)=>{
      console.log(data);
      this.vendors=data;
    },(error)=>{
      console.log(error)
    })


  }
  goBack(){
    this.router.navigate(['user-dashboard'])
  }
  onSubmit(){
    this.isFormSubmitted=true;
    console.log("Vendor Id value"+this.vendorId);
    this.getLaptopByVendor(this.vendorId);
  }
  getLaptopByVendor(vendorId: number) {
    this.adminService.getLaptopByVendor(vendorId).subscribe((data:any)=>{
      console.log(data);
      this.laptops=data;
    },(error)=>{
      console.log(error);
    })
  }
  laptopDetails(id:number){
    this.router.navigate(['laptop-details-user/'+id, {previousUrl: '/laptop-by-vendor'}]);
  }

}
