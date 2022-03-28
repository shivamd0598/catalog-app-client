import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Laptop } from 'src/app/Models/Laptop';
import { AdminService } from 'src/app/Services/Admin/admin.service';
import { RoutingStateUserService } from 'src/app/Services/User/routing-state-user.service';

@Component({
  selector: 'app-laptop-details',
  templateUrl: './laptop-details.component.html',
  styleUrls: ['./laptop-details.component.css']
})
export class LaptopDetailsComponent implements OnInit {
  private id:number;
  laptop:Laptop=new Laptop();
  constructor(private route:ActivatedRoute, private adminService:AdminService, private router:Router,private routingState: RoutingStateUserService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
     this.adminService.getLaptopById(this.id).subscribe((data:any)=>{
       this.laptop=data;
       console.log(data);
     },(error)=>{
       console.log(error);
     })
  }
  goBack(){
    console.log(this.routingState.previousRoutePath.value);
    this.router.navigate([this.routingState.previousRoutePath.value]);  
  }
  redirectToUpdateLaptop(id:number){
    this.router.navigate(['laptop-update/'+id]);
  }
  redirectToLaptopList(){
    this.router.navigate(['laptop-list']);
  }
  redirectToSearchLaptop(){
    this.router.navigate(['search-laptop']);

  }

}
