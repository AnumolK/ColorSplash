import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
 role:any;
 currentUrl: string = '';
 constructor(private router:Router){}
ngOnInit(){
  this.role=localStorage.getItem('role');
  console.log(this.role)
   this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
      }
    });
}

logOut(){
  localStorage.setItem('role','');
  window.location.href=('/')
}
}
