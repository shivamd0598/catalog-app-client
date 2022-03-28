import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData={
    "username":'',
    "password":''
  }
  constructor(private login:LoginService, private router:Router) { }

  ngOnInit() {
   
  }

  formSubmit(){
    console.log("Button clicked");
    if(this.loginData.username.trim()=='' || this.loginData.username==null){
      window.alert("Username can't be empty");
    }
    if(this.loginData.password.trim()=='' || this.loginData.password==null){
      window.alert("Password can't be empty");
    }

    this.login.generateToken(this.loginData).subscribe((data:any)=>{
      console.log("Success");
      console.log(data)

      //login user
      this.login.loginUser(data.token)

      //get current user
      this.login.getCurrentUser().subscribe((user:any)=>{
        //set User
        this.login.setUser(user);
        console.log(user);

        if(this.login.getUserRole()=="ADMIN"){
          this.router.navigate(['/admin'])
        }
        else if(this.login.getUserRole()=="USER"){
          this.router.navigate(['/user-dashboard'])
        }
        else{
          this.login.logout();
        }

      },(error)=>{
        console.log(error);
      }
      )
    },(error)=>{
      console.log("Error!")
      console.log(error)
    }
    );

  }

  

}
