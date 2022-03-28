import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { RoutingStateUserService } from 'src/app/Services/User/routing-state-user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  previousUrl: string = null;
  currentUrl: string = null;
  previousRoute: string;

  constructor(private router:Router, private routingState: RoutingStateUserService) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
  ).subscribe((event: NavigationEnd) => {
     this.previousUrl = this.currentUrl;
     this.currentUrl = event.url;
  });

  }
  public redirectVendorList(){
    this.router.navigate(['vendor-list-user']);
  }
  public redirectLaptopList(){
    this.router.navigate(['laptop-list-user']);
  }
  public redirectLaptopByVendor(){
    this.router.navigate(['laptop-by-vendor-user']);
  }
  public redirectLaptopByName(){
    this.router.navigate(['laptop-by-name-user']);
  }
  public redirectSearchLaptop(){
    this.router.navigate(['search-laptop']);
  }
}
