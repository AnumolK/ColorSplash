import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../api.service';
import { Router, RouterModule } from '@angular/router';


@Component({
   selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  
})
export class LoginComponent {
  loginForm:any;
constructor(private fb:FormBuilder, private api: ApiService,private router: Router){}
ngOnInit(){
    this.loginForm=this.fb.group({
    username:[''],
    password:['']
  })
  
}
onSubmit(){
this.api.login(this.loginForm.value).subscribe({
    next: (res) =>{
      if(res.message=="Login Successful"){
        localStorage.setItem('role',res.role)
        if(res.role == "Admin"){
          window.location.href=('admin/adminhome')
        }
        else
        {
              localStorage.setItem('customerId',res.customerId)
              console.log(localStorage.getItem('customerId'));
             window.location.href=('customer/customerhome')
        }
      }
      else{
        console.log("Invalid Login credentials")
      }
    }
  })
  }
}

