import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cust-products',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './cust-products.component.html',
  styleUrl: './cust-products.component.css',
})
export class CustProductsComponent {
products:any;
categories:any[]=[];
brands:any[]=[];
filteredProducts:any;
selectedBrand: string = '';
selectedCategory: string = '';
constructor(private api:ApiService){}

ngOnInit(){
    this.api.getProducts().subscribe({
      next:(data) =>{
        this.products=data
        this.filteredProducts = data; 
        console.log('Product',data)
      }
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


filterProducts(): void {
  // console.log('Changed')
    if (!this.selectedBrand && !this.selectedCategory) {
    this.filteredProducts = this.products;
  } else {
  this.filteredProducts = this.products.filter((p: any) =>
    (!this.selectedBrand || p.brandName === this.selectedBrand) &&
    (!this.selectedCategory || p.categoryName === this.selectedCategory)
  );
}
}

}
