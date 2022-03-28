import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public redirectAddVendor(){
    this.router.navigate(['add-vendor']);
  }
  public redirectAddLaptop(){
    this.router.navigate(['add-laptop']);
  }
  public redirectVendorList(){
    this.router.navigate(['vendor-list']);
  }
  public redirectLaptopList(){
    this.router.navigate(['laptop-list']);
  }
  public redirectLaptopByVendor(){
    this.router.navigate(['laptop-by-vendor']);
  }
  public redirectLaptopByName(){
    this.router.navigate(['laptop-by-name']);
  }
  public redirectSearchLaptop(){
    this.router.navigate(['search-laptop']);
  }
}
