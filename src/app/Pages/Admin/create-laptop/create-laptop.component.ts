import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Laptop } from 'src/app/Models/Laptop';
import { Vendor } from 'src/app/Models/Vendor';
import { AdminService } from 'src/app/Services/Admin/admin.service';
import { RoutingStateUserService } from 'src/app/Services/User/routing-state-user.service';

@Component({
  selector: 'app-create-laptop',
  templateUrl: './create-laptop.component.html',
  styleUrls: ['./create-laptop.component.css']
})
export class CreateLaptopComponent implements OnInit {
  laptop:Laptop=new Laptop();
  vendors:Vendor[];
  vendorId:number;

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
    console.log(this.routingState.previousRoutePath.value);
    this.router.navigate([this.routingState.previousRoutePath.value]);
  }
  onSubmit(){
    console.log(this.laptop);
    
    console.log("Vendor Id value"+this.vendorId);
    this.addLaptop(this.vendorId);
  }
  changeVendor(e) {
    console.log(e.target.value);
  }
  addLaptop(id) {
    //let value = Number((<HTMLSelectElement>document.getElementById('selectedVendorId')).value);
    this.adminService.createLaptop(this.laptop,id).subscribe((data:any)=>{
      console.log(data);
      this.router.navigate(['laptop-list']);
    },(error)=>{
      console.log(error);
    })
  }


}
