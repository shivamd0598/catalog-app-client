import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Laptop } from 'src/app/Models/Laptop';
import { AdminService } from 'src/app/Services/Admin/admin.service';
import { RoutingStateUserService } from 'src/app/Services/User/routing-state-user.service';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {
  private id:number;
  constructor(private adminService:AdminService,private router:Router,private routingState: RoutingStateUserService) { }
  laptops:Laptop[];
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
    this.router.navigate(['admin']);  
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
      this.getLaptopList();
    },(error)=>{
      console.log(error)
    })
  }

}
