import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Laptop } from 'src/app/Models/Laptop';
import { Vendor } from 'src/app/Models/Vendor';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  private baseUrlVendor="http://productmanagementservice-env.eba-w8bsprfg.us-west-2.elasticbeanstalk.com/api/v1/vendors";
  private baseUrlLaptop="http://productmanagementservice-env.eba-w8bsprfg.us-west-2.elasticbeanstalk.com/api/v1/laptops";
  //create vendor 
  public createVendor(vendor:Vendor){
    return this.http.post(`${this.baseUrlVendor}`,vendor,{responseType: 'text'});
  }
  //get list of vendors 
  public getVendors():Observable<Vendor[]>{
    return this.http.get<Vendor[]>(`${this.baseUrlVendor}`);
  }
  public getVendorById(id:number){
    return this.http.get(`${this.baseUrlVendor}/${id}`);
  }
  public updateVendorById(vendor:Vendor,id:number){
    return this.http.put(`${this.baseUrlVendor}/${id}`,vendor,{responseType: 'text'});
  }
  public deleteVendorById(id:number){
    return this.http.delete(`${this.baseUrlVendor}/${id}`,{responseType: 'text'});
  }
  //create Laptop 
    public createLaptop(laptop:Laptop, id:number){
      return this.http.post(`${this.baseUrlLaptop}/${id}`,laptop,{responseType: 'text'});
    }
     //get list of laptops 
  public getLaptops():Observable<Laptop[]>{
    return this.http.get<Laptop[]>(`${this.baseUrlLaptop}`);
  }
  //get laptop by id
  public getLaptopById(id:number):Observable<Laptop[]>{
    return this.http.get<Laptop[]>(`${this.baseUrlLaptop}/${id}`);
  }
  //get laptop by id
  public getLaptopByVendor(id:number):Observable<Laptop[]>{
    return this.http.get<Laptop[]>(`${this.baseUrlLaptop}/laptop-by-vendor/${id}`);
  }
   //get laptop by id
   public getLaptopByName(name:String):Observable<Laptop[]>{
    return this.http.get<Laptop[]>(`${this.baseUrlLaptop}/laptop-by-name/${name}`);
  }
  //update Laptop
  public updateLaptopById(laptop:Laptop,id:number,vendorId:number){
    return this.http.put(`${this.baseUrlLaptop}/${id}/${vendorId}`,laptop,{responseType: 'text'});
  } 
  public deleteLaptopById(id:number){
    return this.http.delete(`${this.baseUrlLaptop}/${id}`,{responseType: 'text'});
  }
 
}
