import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-colour-view',
  imports: [CommonModule],
  templateUrl: './colour-view.component.html',
  styleUrl: './colour-view.component.css'
})
export class ColourViewComponent {
colours:any;
constructor(private api:ApiService){}

ngOnInit(){
  this.api.getColours().subscribe({
    next:(data)=>{
      this.colours=data;
      console.log(this.colours)
    }
  })
}
}
