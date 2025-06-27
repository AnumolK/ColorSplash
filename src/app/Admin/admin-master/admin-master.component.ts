import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-admin-master',
  imports: [CommonModule,RouterModule],
  templateUrl: './admin-master.component.html',
  styleUrl: './admin-master.component.css'
})
export class AdminMasterComponent {

  constructor(private api:ApiService,private route:Router){}

  ngOnInit(){
    if(localStorage.getItem('role') != 'Admin'){
      this.route.navigate(['/login'])
    }
  }
  
  logOut(){
    this.api.logOut().subscribe({
      next : (res)=>{
        console.log(res);
        localStorage.clear();
        sessionStorage.clear();
        this.route.navigate(['/login'])
      }
    })
  }
}
