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
  getProducts(): Observable <any[]>{
    return this.http.get<any[]>('https://localhost:7175/api/Product',{
      withCredentials: false
    });
  }
   getProduct(id: number): Observable <any[]>{
    return this.http.get<any[]>(`https://localhost:7175/api/Product/Id?Id=${id}`,{
      withCredentials: false
    });
  }
  addStatus(data:any): Observable<any>{
    return this.http.post('https://localhost:7175/api/Status',data,{
      withCredentials:true
    })
  }
    addColour(data:any): Observable<any>{
    return this.http.post('https://localhost:7175/api/Colour',data,{
      withCredentials:true
    })
  }
    getColours(): Observable <any[]>{
    return this.http.get<any[]>('https://localhost:7175/api/Colour',{
      withCredentials: false
    });
  }
   logOut(): Observable <any[]>{
    return this.http.post<any[]>('https://localhost:7175/api/Authentication/logout', {}, {
      withCredentials: true
    });
  }
    userRegistration(data:any): Observable<any>{
    return this.http.post('https://localhost:7175/api/Customer',data,{
      withCredentials:false
    })
  }
    makeOrder(data:any): Observable<any>{
    return this.http.post('https://localhost:7175/api/Order',data,{
      withCredentials:true
    })
  }

  myOrders(id: number): Observable <any[]>{
    return this.http.get<any[]>(`https://localhost:7175/api/Order/CustomerId?Id=${id}`,{
      withCredentials: true
    });
  }

   getOrders(): Observable <any[]>{
    return this.http.get<any[]>('https://localhost:7175/api/Order',{
      withCredentials: true
    });
  }

  updateOrderStatus(id: number, data:any){
  return this.http.put<any[]>(`https://localhost:7175/api/Order?Id=${id}`,data,{
      withCredentials: true
    });
  }
  
    getOrderById(id: number): Observable <any[]>{
    return this.http.get<any[]>(`https://localhost:7175/api/Order/OrderbyId?Id=${id}`,{
      withCredentials: true
    });
  }
}
