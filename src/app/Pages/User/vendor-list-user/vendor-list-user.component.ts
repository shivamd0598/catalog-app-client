import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/Models/Vendor';
import { AdminService } from 'src/app/Services/Admin/admin.service';

@Component({
  selector: 'app-vendor-list-user',
  templateUrl: './vendor-list-user.component.html',
  styleUrls: ['./vendor-list-user.component.css']
})
export class VendorListUserComponent implements OnInit {
  vendors:Vendor[];
  constructor(private router:Router,private adminService:AdminService) { }

  ngOnInit(): void {
    this.getVendorList();
  }
  getVendorList(){
    this.adminService.getVendors().subscribe((data:any)=>{
      console.log(data);
      this.vendors=data;
    },(error)=>{
      console.log(error)
    })
  }
  vendorDetails(id:number){
    this.router.navigate(['/vendor-details-user/'+id]);
  }
  public goBack(){
    this.router.navigate(['user-dashboard']);
  }
}
