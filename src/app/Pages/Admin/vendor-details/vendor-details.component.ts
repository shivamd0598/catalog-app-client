import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/Models/Vendor';
import { AdminService } from 'src/app/Services/Admin/admin.service';
import { RoutingStateUserService } from 'src/app/Services/User/routing-state-user.service';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {
  private id:number;
  vendor:Vendor=new Vendor();
  constructor(private route:ActivatedRoute, private adminService:AdminService, private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.adminService.getVendorById(this.id).subscribe((data:any)=>{
      this.vendor=data;
    },(error)=>{
      console.log(error);
    })
  }
  redirectToUpdateVendor(id:number){
    this.router.navigate(['vendor-update/'+id]);
  }
  goBack(){
    this.router.navigate(['vendor-list']);
  }

}
