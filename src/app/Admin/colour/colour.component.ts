import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-colour',
  imports: [FormsModule,ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './colour.component.html',
  styleUrl: './colour.component.css'
})
export class ColourComponent {
colourForm:any;
message:any;
constructor(private api:ApiService,private fb:FormBuilder){}

ngOnInit(){
  this.colourForm=this.fb.group({
    ColourName:['',Validators.required],
    ColourCode:['',Validators.required],
    ColourImage:['',Validators.required]
  })
}

onSubmit(){
  if(this.colourForm.valid){
    this.api.addColour(this.colourForm.value).subscribe({
      next: (res)=>{
        this.message="Colour added"
        console.log(res)
        window.location.reload();
      }
    })
  }
  else{
    this.message="Colour Not added .Please Check your data"
  }
}
}
