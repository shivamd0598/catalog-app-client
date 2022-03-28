import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/Models/Vendor';
import { AdminService } from 'src/app/Services/Admin/admin.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  vendors:Vendor[];
  constructor(private router:Router,private adminService:AdminService) { }

  ngOnInit(): void {
    this.getVendorList();
  }
  redirectToAddLaptop(){
    this.router.navigate(['add-laptop']);
  }
  getVendorList(){
    this.adminService.getVendors().subscribe((data:any)=>{
      console.log(data);
      this.vendors=data;
    },(error)=>{
      console.log(error)
    })
  }
  updateVendor(id:number){
    this.router.navigate(['/vendor-update/'+id]);
  }
  public goBack(){
    this.router.navigate(['admin']);
  }
  vendorDetails(id:number){
    this.router.navigate(['/vendor-details/'+id]);
  }
  deleteVendor(id:number){
    this.adminService.deleteVendorById(id).subscribe(data=>{
      console.log("Vendor has been deleted sucessfully!!!");
      this.getVendorList();
    },(error)=>{
      console.log(error);
    })
  }
}
