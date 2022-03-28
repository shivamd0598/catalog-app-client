import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
import { Laptop } from 'src/app/Models/Laptop';
import { AdminService } from 'src/app/Services/Admin/admin.service';
import { RoutingStateUserService } from 'src/app/Services/User/routing-state-user.service';

@Component({
  selector: 'app-laptop-details-user',
  templateUrl: './laptop-details-user.component.html',
  styleUrls: ['./laptop-details-user.component.css']
})
export class LaptopDetailsUserComponent implements OnInit {
  previousUrl: string;
  private id:number;

  laptop:Laptop=new Laptop();
  constructor(private route:ActivatedRoute, private adminService:AdminService, private router:Router, private routingState: RoutingStateUserService) { 
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.adminService.getLaptopById(this.id).subscribe((data:any)=>{
      this.laptop=data;
      console.log(data);
    },(error)=>{
      console.log(error);
    });

  }


  goBack(){
   console.log(this.routingState.previousRoutePath.value);
   this.router.navigate([this.routingState.previousRoutePath.value]);
  }
}
