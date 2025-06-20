import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  categories:any[]=[];
  brands:any[]=[];
  productForm:any;
  message:any;
  constructor(private api:ApiService,private fb:FormBuilder){}
  ngOnInit(){
    this.productForm=this.fb.group({
      CategoryId:['',Validators.required],
      BrandId:['',Validators.required],
      ProductName:['',Validators.required],
      ProductImage:['',Validators.required],
      ProductCost:['',Validators.required]
    })

    this.api.getCategories().subscribe({
      next:(data) =>{
        this.categories=data
        console.log('CATEGORY',data)
      }
    })

    this.api.getBrand().subscribe({
      next:(data) =>{
        this.brands=data
        console.log('Brand',data)
      }
    })

  }

  onSubmit(){
    if(this.productForm.valid){
      this.api.addProduct(this.productForm.value).subscribe({
        next:(res) =>{
          console.log(res)
          this.message="Product Added"
        }
      })
    }
    else{
      this.message="Product Not Added. Please check your data"
    }
  }
}
