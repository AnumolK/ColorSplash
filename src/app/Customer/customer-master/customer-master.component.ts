import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-customer-master',
  imports: [CommonModule,RouterModule],
  templateUrl: './customer-master.component.html',
  styleUrl: './customer-master.component.css'
})
export class CustomerMasterComponent {
constructor(private api:ApiService, private route:Router){}

ngOnInit(){
    if(localStorage.getItem('role') != 'Customer'){
      window.location.href=('/login')
    }
}

    logOut(){
    this.api.logOut().subscribe({
      next : (res)=>{
        console.log(res);
        localStorage.setItem('role','')
        this.route.navigate(['/login']).then(() => {
          location.reload();
        });
      }
    })
  }
}
