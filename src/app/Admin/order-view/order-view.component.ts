import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-order-view',
  imports: [CommonModule,RouterModule],
  templateUrl: './order-view.component.html',
  styleUrl: './order-view.component.css'
})
export class OrderViewComponent {

  orders:any;
constructor(private api:ApiService){}
  ngOnInit(){
  this.api.getOrders().subscribe({
    next:(data)=>{
      this.orders=data;
      console.log(this.orders)
    }
  })
}
}
