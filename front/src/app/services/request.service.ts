import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  urlback = environment.urlBack;
  session = null;
  token = null;
  id = null;
  constructor(private http: HttpClient) { }

  //headers

  generateHeaders() {
    var header = {};
    var id = "" + this.id;
    if (this.token != null) {
      header = { api_token: this.token, user_id: id };
    }
    return header;
  }
  //headerEnd

  //session---------------------------------------------------------------------


  SingUser(data): Observable<any> {
    return this.http.post<any>(this.urlback + 'sigin', data);
  }

  loginUser(data): Observable<any> {
    return this.http.post<any>(this.urlback + 'login', data);
  }

  loadSession(data): Observable<any> {
    return this.http.post<any>(this.urlback + 'loadsession', data, { headers: this.generateHeaders() });
  }
  logOut(): Observable<any> {
    return this.http.get<any>(this.urlback + 'logout', { headers: this.generateHeaders() });
  }
  //sessionEnd----------------------------------------------------

  getUsers(): Observable<any> {
    return this.http.get<any>(this.urlback + 'index', { headers: this.generateHeaders() });
  }

  //category-----------------------------------------------------
  getCategory(): Observable<any> {
    return this.http.get<any>(this.urlback + 'category');
  }
  createCategory(data): Observable<any> {
    return this.http.post<any>(this.urlback + 'category/create', data, { headers: this.generateHeaders() });
  }
  updateCategory(data): Observable<any> {
    return this.http.post<any>(this.urlback + 'category/update', data, { headers: this.generateHeaders() });
  }
  deleteCategory(data): Observable<any> {
    return this.http.post<any>(this.urlback + 'category/delete', data, { headers: this.generateHeaders() });
  }

  //vategoryEnd--------------------------------------------------
  //Prducts------------------------------------------------------

  getProducts(): Observable<any> {
    return this.http.get<any>(this.urlback + 'products', { headers: this.generateHeaders() });
  }
  getOneProduct(id): Observable<any> {
    return this.http.get<any>(this.urlback + 'product/' + id, { headers: this.generateHeaders() });
  }

  createProducts(data): Observable<any> {
    return this.http.post<any>(this.urlback + 'products/create', data, { headers: this.generateHeaders() });
  }
  updateProducts(data): Observable<any> {
    return this.http.post<any>(this.urlback + 'products/update', data, { headers: this.generateHeaders() });
  }
  deleteProducts(data): Observable<any> {
    return this.http.post<any>(this.urlback + 'products/delete', data, { headers: this.generateHeaders() });
  }



  //PrductsEnd------------------------------------------------------

  //Prducts------------------------------------------------------

  getProductsGalery(id): Observable<any> {
    return this.http.get<any>(this.urlback + 'products/galery/' + id, { headers: this.generateHeaders() });
  }

  createProductsGalery(data): Observable<any> {
    return this.http.post<any>(this.urlback + 'products/galery/create', data, { headers: this.generateHeaders() });
  }
  updateProductsGalery(data): Observable<any> {
    return this.http.post<any>(this.urlback + 'products/galery/update', data, { headers: this.generateHeaders() });
  }
  deleteProductsGalery(id): Observable<any> {
    return this.http.post<any>(this.urlback + 'products/galery/delete', id, { headers: this.generateHeaders() });
  }

  //PrductsEnd------------------------------------------------------

  //admin methods///////////////////////////////
  getSizes(): Observable<any> {
    return this.http.get<any>(this.urlback + 'sizes', { headers: this.generateHeaders() });
  }
  //front methods///////////////////////////////

  getProductsPopular(): Observable<any> {
    return this.http.get<any>(this.urlback + 'products/populars', { headers: this.generateHeaders() });
  }

}
