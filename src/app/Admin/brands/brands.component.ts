import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-brands',
  imports: [ReactiveFormsModule,CommonModule,FormsModule,RouterModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent {
brandForm:any;
message:any;
constructor(private api:ApiService,private fb:FormBuilder){}

ngOnInit(){
  this.brandForm=this.fb.group({
    BrandName:['',Validators.required],
    Logo:['',Validators.required]
  })
}

onSubmit(){
  if(this.brandForm.valid){
    this.api.addbrand(this.brandForm.value).subscribe({
      next: (res)=>{
        this.message="Brand added"
        console.log(res)
      }
    })
  }
  else{
    this.message="Brand Not added .Please Check your data"
  }
}
}
