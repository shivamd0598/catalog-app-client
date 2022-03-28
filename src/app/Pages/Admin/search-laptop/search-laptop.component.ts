import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { Laptop } from 'src/app/Models/Laptop';
import { Vendor } from 'src/app/Models/Vendor';
import { AdminService } from 'src/app/Services/Admin/admin.service';
import { RoutingStateUserService } from 'src/app/Services/User/routing-state-user.service';

@Component({
  selector: 'app-search-laptop',
  templateUrl: './search-laptop.component.html',
  styleUrls: ['./search-laptop.component.css']
})
export class SearchLaptopComponent implements OnInit {
  laptops:Laptop[];
  vendors:Vendor[];
  vendorId:number;
  laptopsSize:boolean;
  laptopName:String;
  isFormSubmitted:boolean=false;
  constructor(private adminService:AdminService,private router:Router, public loginService:LoginService) { }

  ngOnInit(): void {
    this.adminService.getVendors().subscribe((data:any)=>{
      console.log(data);
      this.vendors=data;
    },(error)=>{
      console.log(error)
    })
    
  } 


  goBack(){
      if(this.loginService.getUserRole()=="ADMIN"){
        this.router.navigate(['admin']);
      }
      else{
        this.router.navigate(['user-dashboard']);
      }
  }
  onSubmitByVendor(){
    this.isFormSubmitted=true;
    console.log("Vendor Id value"+this.vendorId);
    this.getLaptopByVendor(this.vendorId);
 
  }
  onSubmitByName(){
    this.isFormSubmitted=true;   
    console.log("Laptop Name:"+this.laptopName);
    this.getLaptopByName(this.laptopName);

  }
  getLaptopByVendor(vendorId: number) {
    this.adminService.getLaptopByVendor(vendorId).subscribe((data:any)=>{
      console.log(data);
      this.laptops=data;
  

    },(error)=>{
      console.log(error);
    })
  }

  getLaptopByName(name:String){
    this.adminService.getLaptopByName(this.laptopName).subscribe((data:any)=>{
      this.laptops=data;
    },(error)=>{
      console.log(error);
    })
  }
  updateLaptop(id:number){
    this.router.navigate(['laptop-update/'+id]);
  }
  laptopDetails(id:number){
    if(this.loginService.getUserRole()=="ADMIN"){
      this.router.navigate(['laptop-details/'+id]);
    }
    else{
      this.router.navigate(['laptop-details-user/'+id]);
    }
  }
  deleteLaptop(id:number){
    this.adminService.deleteLaptopById(id).subscribe(data=>{
      console.log(data);
      this.getLaptopByVendor(this.vendorId);
    },(error)=>{
      console.log(error)
    })
  }
  searchTypeCheck(x:number){
    if(x==1){
      document.getElementById("searchByVendor").style.display="block";
      document.getElementById("searchByName").style.display="none";
     
    }
    else if(x==2){
      document.getElementById("searchByName").style.display="block";
      document.getElementById("searchByVendor").style.display="none";
    }
    else{
      document.getElementById("searchByVendor").style.display="none";
      document.getElementById("searchByName").style.display="none";
    }
  }

}
