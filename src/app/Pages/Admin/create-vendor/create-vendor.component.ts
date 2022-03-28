import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/Models/Vendor';
import { AdminService } from 'src/app/Services/Admin/admin.service';
import { RoutingStateUserService } from 'src/app/Services/User/routing-state-user.service';

@Component({
  selector: 'app-create-vendor',
  templateUrl: './create-vendor.component.html',
  styleUrls: ['./create-vendor.component.css']
})
export class CreateVendorComponent implements OnInit {
  vendor:Vendor=new Vendor();
  constructor(private router:Router, private adminService:AdminService) { }

  ngOnInit(): void {
  }
  goBack(){
    this.router.navigate(['admin']);
  }
  saveVendor(){
    this.adminService.createVendor(this.vendor).subscribe(data=>{
      console.log(data);
      console.log("Data is logged!!!")
      this.router.navigate(['vendor-list']);
    },(error)=>{
      console.log(error);
    })
  }
  goToVendorList() {
    console.log("Inside goToVendorList function");
    this.router.navigate(['vendor-list']);
  }
  onSubmit(){
    console.log(this.vendor);
    this.saveVendor();
  }
}
