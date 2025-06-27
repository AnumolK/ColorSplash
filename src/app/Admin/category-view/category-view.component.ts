import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-view',
  imports: [CommonModule,RouterModule],
  templateUrl: './category-view.component.html',
  styleUrl: './category-view.component.css'
})
export class CategoryViewComponent {
categories:any;
constructor(private api:ApiService){}

ngOnInit(){
  this.api.getCategories().subscribe({
      next:(data) =>{
        this.categories=data
        console.log('Brand',data)
      }
    })
}
}
