import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-brand-view',
  imports: [FormsModule,CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './brand-view.component.html',
  styleUrl: './brand-view.component.css'
})
export class BrandViewComponent {
brands:any;
constructor(private api:ApiService){}

ngOnInit(){
  this.api.getBrand().subscribe({
    next:(data)=>{
      this.brands=data;
      console.log(this.brands)
    }
  })
}
}
