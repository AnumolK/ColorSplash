import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-view',
  imports: [CommonModule,RouterModule],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {
  products:any;
constructor(private api:ApiService){}

ngOnInit(){
    this.api.getProducts().subscribe({
      next:(data) =>{
        this.products=data
        console.log('Product',data)
      }
    })
}
}
