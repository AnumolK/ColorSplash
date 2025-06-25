import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent {
 statusForm:any;
  message:any;
constructor(private fb:FormBuilder,private api:ApiService){}
ngOnInit(){
  this.statusForm=this.fb.group({
    StatusName:['',Validators.required]
  })
}

onSubmit(){
    if(this.statusForm.valid){
      console.log('Hi')
    this.api.addStatus(this.statusForm.value).subscribe({
      next: (res)=>{
        console.log(res)
        this.message="status added"
      }
    })
  }
  this.message="status not added. Please check your data "
}

}
