import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-home',
  imports: [CommonModule],
  templateUrl: './customer-home.component.html',
  styleUrl: './customer-home.component.css'
})
export class CustomerHomeComponent {
colors:any;
constructor(private api:ApiService){}
  ngOnInit(){
  this.api.getColours().subscribe({
    next:(data)=>{
      this.colors=data;
      console.log(this.colors)
    }
  })
}
}
