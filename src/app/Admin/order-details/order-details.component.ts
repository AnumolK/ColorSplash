import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-details',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent {

  id:any;
  statusForm:any;
  order:any[]=[];
  Total:any;
  constructor(private api :ApiService,private route:ActivatedRoute, private fb:FormBuilder){}
ngOnInit(){
this.id= this.route.snapshot.paramMap.get('id');
this.statusForm=this.fb.group({
  OrderStatus:[''],
  Remark:['']
})
this.api.getOrderById(this.id).subscribe({
  next: (res)=>{
    console.log(res);
    this.order=res;
    this.Total = (Number(this.order[0].orderQuantity) || 0) * (Number(this.order[0].productCost) || 0);
  }
})
}

onSubmit(){
 this.api.updateOrderStatus(this.id,this.statusForm.value).subscribe({
      next: res =>{
        console.log(res)
        window.location.reload()
      }
    })
}
}
