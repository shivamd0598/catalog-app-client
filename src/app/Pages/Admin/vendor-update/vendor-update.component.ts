import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/Models/Vendor';
import { AdminService } from 'src/app/Services/Admin/admin.service';
import { RoutingStateUserService } from 'src/app/Services/User/routing-state-user.service';

@Component({
  selector: 'app-vendor-update',
  templateUrl: './vendor-update.component.html',
  styleUrls: ['./vendor-update.component.css']
})
export class VendorUpdateComponent implements OnInit {
  private id:number;
  vendor:Vendor=new Vendor();
  constructor(private route:ActivatedRoute, private adminService:AdminService, private router:Router,private routingState: RoutingStateUserService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.adminService.getVendorById(this.id).subscribe((data:any)=>{
      this.vendor=data;
    },(error)=>{
      console.log(error);
    })
  }
  onSubmit(){
    this.updateVendorById();
  }
  updateVendorById() {
    this.adminService.updateVendorById(this.vendor,this.id).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['vendor-list']);
    },(error)=>{
      console.log(error);
    })
  }
  goBack(){
    console.log(this.routingState.previousRoutePath.value);
    this.router.navigate([this.routingState.previousRoutePath.value]);  
  }

}
