import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-registration',
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './customer-registration.component.html',
  styleUrl: './customer-registration.component.css'
})
export class CustomerRegistrationComponent {

  regForm:any;
  message:any;
  username:any;
  password:any;
  constructor(private fb:FormBuilder, private api:ApiService, private route:Router){}

ngOnInit():void {
this.regForm=this.fb.group({
  Name:['',[Validators.required,Validators.pattern('^[A-Z][a-zA-Z]*$')]],
  Email:['',[Validators.required,Validators.email]],
  Contact:['',[Validators.required, Validators.pattern(/^\d{10}$/)]],
  Address:['',Validators.required]
})
}

onSubmit(){
  this.regForm.markAllAsTouched();
   if(this.regForm.valid){
    this.api.userRegistration(this.regForm.value).subscribe({
      next: (res)=>{
        this.message="User Registered";
         const customerId = res.id; 
          console.log(res);
        const loginPayload = {
          CustomerId: customerId,
          UserName: this.username, 
          Password: this.password ,
          Role:'Customer', 
        };
        this.api.userLoginRegistration(loginPayload).subscribe({
          next: (loginRes) => {
            console.log("Login info saved", loginRes);
            this.route.navigate(['/login'])
          },
          error: (err) => {
            console.error("Error saving login info", err);
          }
        });
      }
    })
  }
  else{
    this.message="User Not Registered .Please Check your data"
  }
}
}
