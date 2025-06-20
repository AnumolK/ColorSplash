import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-category',
  imports: [FormsModule,CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categoryForm:any;
  message:any;
constructor(private fb:FormBuilder,private api:ApiService){}
ngOnInit(){
  this.categoryForm=this.fb.group({
    CategoryName:['',Validators.required]
  })
}

onSubmit(){
    if(this.categoryForm.valid){
      console.log('Hi')
    this.api.addcategories(this.categoryForm.value).subscribe({
      next: (res)=>{
        console.log(res)
        this.message="category added"
      }
    })
  }
  this.message="category not added. Please check your data "
}

}
