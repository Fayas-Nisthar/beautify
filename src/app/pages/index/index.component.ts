import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BeautifyService } from 'src/app/serices/beautify.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  constructor (private service:BeautifyService,private route:Router){

  }
  
    signUpForm=new FormGroup({
      name:new FormControl("",Validators.required),
      email:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required)
    })
  
    signInForm=new FormGroup({
      email:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required)
    })
  
    signup(){
      let data=this.signUpForm.value
      this.service.signUp(data).subscribe(data=>{
        this.signUpForm.reset()
      })
    }

    login(){
      let data=this.signInForm.value
      this.service.signIn(data).subscribe((data:any)=>{
        let accesskey=data.token
        let token=`Bearer ${accesskey}`
        localStorage.setItem("token",token)
        this.route.navigateByUrl("home")
        this.signInForm.reset()
      })
        
    }

}
