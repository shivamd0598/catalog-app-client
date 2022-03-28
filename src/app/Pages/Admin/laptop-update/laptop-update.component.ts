import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Laptop } from 'src/app/Models/Laptop';
import { Vendor } from 'src/app/Models/Vendor';
import { AdminService } from 'src/app/Services/Admin/admin.service';
import { RoutingStateUserService } from 'src/app/Services/User/routing-state-user.service';

@Component({
  selector: 'app-laptop-update',
  templateUrl: './laptop-update.component.html',
  styleUrls: ['./laptop-update.component.css']
})
export class LaptopUpdateComponent implements OnInit {
  private id:number;
  vendors:Vendor[];
  laptop:Laptop=new Laptop();

  form:FormGroup;
  
  vendorSelected:number;

  constructor(private route:ActivatedRoute, private adminService:AdminService, private router:Router,private routingState: RoutingStateUserService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.adminService.getLaptopById(this.id).subscribe((data:any)=>{
      this.laptop=data;
      console.log(data);
      this.form=new FormGroup({
        name:new FormControl(this.laptop.name),
        processor:new FormControl(this.laptop.processor),
        ram:new FormControl(this.laptop.ram),
        os:new FormControl(this.laptop.os),
        storageType:new FormControl(this.laptop.storageType),
        storageSize:new FormControl(this.laptop.storageSize),
        price:new FormControl(this.laptop.price),
        currentVendor:new FormControl(this.laptop.vendor),
      });
      console.log(this.form.controls['currentVendor'].value);
     
      this.vendorSelected=this.laptop.vendor.id;
    },(error)=>{
      console.log(error);
    })
    this.getVendors();
  }
  getVendors() {
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
    if(this.vendorSelected==undefined||this.vendorSelected==null){
      this.vendorSelected=this.laptop.vendor.id;
    }
    console.log(this.vendorSelected);
    console.log(this.laptop)
    this.updateLaptop();
  }
  updateLaptop() {
    this.adminService.updateLaptopById(this.laptop,this.id,this.vendorSelected).subscribe(data=>{
      console.log(data);
      this.router.navigate(['laptop-list']);
    },(error)=>{console.log(error)});
  }
  filterVendors(vendors:Vendor[]){
    return vendors.filter(vendor=>vendor.id!=this.laptop.vendor.id);
  }
  changeVendor(e){
    console.log(e.target.value);
    this.vendorSelected=e.target.value;
  }

}
