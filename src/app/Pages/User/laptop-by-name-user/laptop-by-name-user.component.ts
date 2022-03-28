import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Laptop } from 'src/app/Models/Laptop';
import { AdminService } from 'src/app/Services/Admin/admin.service';

@Component({
  selector: 'app-laptop-by-name-user',
  templateUrl: './laptop-by-name-user.component.html',
  styleUrls: ['./laptop-by-name-user.component.css']
})
export class LaptopByNameUserComponent implements OnInit {
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
    this.router.navigate(['user-dashboard']);  
  }
  onSubmit(){    
    this.isFormSubmitted=true;
    console.log("Laptop Name:"+this.laptopName);
    this.getLaptopByName(this.laptopName);
  }
  laptopDetails(id:number){
    this.router.navigate(['laptop-details-user/'+id]);
  }

}

