import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Laptop } from 'src/app/Models/Laptop';
import { AdminService } from 'src/app/Services/Admin/admin.service';

@Component({
  selector: 'app-laptop-list-user',
  templateUrl: './laptop-list-user.component.html',
  styleUrls: ['./laptop-list-user.component.css']
})
export class LaptopListUserComponent implements OnInit {
  private id:number;
  laptops:Laptop[];
  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.getLaptopList();

  }
  getLaptopList(){
    this.adminService.getLaptops().subscribe((data:any)=>{
      console.log(data);
      this.laptops=data;
    },(error)=>{
      console.log(error)
    })
  }
  public goBack(){
    this.router.navigate(['user-dashboard']);
  }
  laptopDetails(id:number){
    this.router.navigate(['laptop-details-user/'+id]);
  }

}
