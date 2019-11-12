import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  urlback = environment.urlBack;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.urlback + 'index');
  }

  //category-----------------------------------------------------
  getCategory(): Observable<any> {
    return this.http.get<any>(this.urlback + 'category');
  }

  //vategoryEnd--------------------------------------------------
  //Prducts------------------------------------------------------

  getProducts(): Observable<any> {
    return this.http.get<any>(this.urlback + 'products');
  }

  createProducts(data): Observable<any> {
    return this.http.post<any>(this.urlback + 'products/create', data);
  }
  deleteProducts(data): Observable<any> {
    return this.http.post<any>(this.urlback + 'products/delete', data);
  }

  //PrductsEnd------------------------------------------------------

}
