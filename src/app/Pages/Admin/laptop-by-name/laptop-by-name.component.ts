import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Laptop } from 'src/app/Models/Laptop';
import { AdminService } from 'src/app/Services/Admin/admin.service';

@Component({
  selector: 'app-laptop-by-name',
  templateUrl: './laptop-by-name.component.html',
  styleUrls: ['./laptop-by-name.component.css']
})
export class LaptopByNameComponent implements OnInit {
  laptops:Laptop[];
  laptopName:String;
  isFormSubmitted:boolean=false;
  constructor(private adminService:AdminService,private router:Router) { }
  
  ngOnInit(): void {
  }

  getLaptopByName(name:String){
    this.adminService.getLaptopByName(this.laptopName).subscribe((data:any)=>{
      this.laptops=data;
    },(error)=>{
      console.log(error);
    })
  }
  goBack(){
    this.router.navigate(['admin']);  
  }
  onSubmit(){ 
    this.isFormSubmitted=true;   
    console.log("Laptop Name:"+this.laptopName);
    this.getLaptopByName(this.laptopName);
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
      this.getLaptopByName(this.laptopName);
    },(error)=>{
      console.log(error)
    })
  }

}
