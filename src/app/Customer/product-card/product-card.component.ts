import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  product:any;
  id:any;
  colours:any[]=[];
  orderForm:any;
  message:any;
  whiteColourId:any;
  selectedColorId: number | null = null;
  productPrice:any;
constructor(private api:ApiService,private route:ActivatedRoute, private fb:FormBuilder){}

ngOnInit(){

  this.orderForm=this.fb.group({
  ProductId:[''],
  ColourId:[''],
  OrderQuantity:[1,[Validators.required, Validators.min(1)]],
})
this.id= this.route.snapshot.paramMap.get('id');
 this.api.getColours().subscribe({
    next:(data)=>{
      this.colours=data;
      const whiteColour = this.colours.find((colour: any) =>
        typeof colour.colourName === 'string' && colour.colourName.toLowerCase() === 'white');
      this.whiteColourId = whiteColour ? whiteColour.id : null;
      this.selectedColorId=this.whiteColourId;
    }
  })
    this.api.getProduct(this.id).subscribe({
      next: (res)=>{
        this.product=res;
        this.productPrice=this.product.productCost;
      }
    })
}



selectColour(colorId: number) {
  this.selectedColorId = colorId;
  this.orderForm.patchValue({ ColourId: colorId });
}
 
onSubmit(){
  this.orderForm.value.ProductId=this.product.id;
if(!this.orderForm.value.ColourId){
  this.orderForm.value.ColourId=this.whiteColourId;
}
   if(this.orderForm.valid){
      console.log('Valid',this.orderForm.value)
      this.api.makeOrder(this.orderForm.value).subscribe({
        next:(res) =>{
          console.log(res)
          this.message="Order Placed"
          this.orderForm.reset();
        }
      })
    }
    else{
      this.message="Order Not Placed. Please Try again!"
    }
  
}

updatePrice() {
  const quantity = this.orderForm.get('OrderQuantity')?.value || 1;
  this.productPrice = this.product.productCost * quantity;
}
}