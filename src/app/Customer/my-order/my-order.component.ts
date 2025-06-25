import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-order',
  imports: [CommonModule],
  templateUrl: './my-order.component.html',
  styleUrl: './my-order.component.css'
})
export class MyOrderComponent {

  customerId:any;
 orders :any;
  constructor(private api:ApiService){}

  ngOnInit(){
    this.customerId=localStorage.getItem('customerId');
    this.api.myOrders(this.customerId).subscribe({
      next: (res)=>{
        console.log(res)
        this.orders=res;
      }
    })
  }

  cancelOrder(orderId: number){
    const confirmCancel = confirm('Are you sure you want to cancel this order?');
    console.log(orderId);
    const payload={
      OrderStatus:6,
      Remark:'cancelled'
    }
    if(confirmCancel){
    this.api.updateOrderStatus(orderId,payload).subscribe({
      next: res =>{
        console.log(res)
        window.location.reload()
      }
    })
  }
  }
}
