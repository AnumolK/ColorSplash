import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-guest-home',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './guest-home.component.html',
  styleUrl: './guest-home.component.css'
})
export class GuestHomeComponent {

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
