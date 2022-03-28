import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/Models/Vendor';
import { AdminService } from 'src/app/Services/Admin/admin.service';

@Component({
  selector: 'app-vendor-details-user',
  templateUrl: './vendor-details-user.component.html',
  styleUrls: ['./vendor-details-user.component.css']
})
export class VendorDetailsUserComponent implements OnInit {
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
  goBack(){
    this.router.navigate(['user-dashboard']);
  }

}
