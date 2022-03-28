import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Laptop } from 'src/app/Models/Laptop';
import { Vendor } from 'src/app/Models/Vendor';
import { AdminService } from 'src/app/Services/Admin/admin.service';
import { RoutingStateUserService } from 'src/app/Services/User/routing-state-user.service';

@Component({
  selector: 'app-laptop-by-vendor',
  templateUrl: './laptop-by-vendor.component.html',
  styleUrls: ['./laptop-by-vendor.component.css']
})
export class LaptopByVendorComponent implements OnInit {
  laptops:Laptop[];
  vendors:Vendor[];
  vendorId:number;
  laptopsSize:boolean;
  isFormSubmitted:boolean=false;
  constructor(private adminService:AdminService,private router:Router,private routingState: RoutingStateUserService) { }

  ngOnInit(): void {
    this.adminService.getVendors().subscribe((data:any)=>{
      console.log(data);
      this.vendors=data;
    },(error)=>{
      console.log(error)
    })
  }
  goBack(){
    this.router.navigate(['admin']);  }
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


  updateLaptop(id:number){
    this.router.navigate(['laptop-update/'+id]);
  }
  laptopDetails(id:number){
    this.router.navigate(['laptop-details/'+id]);
  }
  deleteLaptop(id:number){
    this.adminService.deleteLaptopById(id).subscribe(data=>{
      console.log(data);
      this.getLaptopByVendor(this.vendorId);
    },(error)=>{
      console.log(error)
    })
  }

 

}
