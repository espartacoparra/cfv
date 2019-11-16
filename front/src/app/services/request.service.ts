import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  urlback = environment.urlBack;
  session = 0;
  constructor(private http: HttpClient) { }

  //session

  //sessionEnd
  getUsers(): Observable<any> {
    return this.http.get<any>(this.urlback + 'index');
  }

  //category-----------------------------------------------------
  getCategory(): Observable<any> {
    return this.http.get<any>(this.urlback + 'category');
  }
  createCategory(data): Observable<any> {
    return this.http.post<any>(this.urlback + 'category/create', data);
  }
  updateCategory(data): Observable<any> {
    return this.http.post<any>(this.urlback + 'category/update', data);
  }
  deleteCategory(data): Observable<any> {
    return this.http.post<any>(this.urlback + 'category/delete', data);
  }

  //vategoryEnd--------------------------------------------------
  //Prducts------------------------------------------------------

  getProducts(): Observable<any> {
    return this.http.get<any>(this.urlback + 'products');
  }

  createProducts(data): Observable<any> {
    return this.http.post<any>(this.urlback + 'products/create', data);
  }
  updateProducts(data): Observable<any> {
    return this.http.post<any>(this.urlback + 'products/update', data);
  }
  deleteProducts(data): Observable<any> {
    return this.http.post<any>(this.urlback + 'products/delete', data);
  }

  //PrductsEnd------------------------------------------------------

}
