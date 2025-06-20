import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  login(data:any): Observable<any>{
    return this.http.post('https://localhost:7175/api/Authentication/login',data,{
      withCredentials:true
    });
  }

  addcategories(data:any):Observable<any>{
    return this.http.post('https://localhost:7175/api/Category',data,{
      withCredentials:true
    });
  }
   getCategories(): Observable <any[]>{
    return this.http.get<any[]>('https://localhost:7175/api/Category',{
      withCredentials:false
    });
  }

  addbrand(data:any) : Observable<any>{
    return this.http.post('https://localhost:7175/api/Brand',data,{
      withCredentials:true
    })
  }

   getBrand(): Observable <any[]>{
    return this.http.get<any[]>('https://localhost:7175/api/Brand',{
      withCredentials: false
    });
  }

  addProduct(data:any): Observable<any>{
    return this.http.post('https://localhost:7175/api/Product',data,{
      withCredentials:true
    })
  }
}
