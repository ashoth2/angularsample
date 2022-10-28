import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productmodel } from '../productmodel/productmodel';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
constructor(private http:HttpClient){

}
apiurl='  http://localhost:3000/Product';
regapiurl = 'http://localhost:3000/Register';



Getallproduct(): Observable<productmodel[]> {
  return this.http.get<productmodel[]>(this.apiurl);
}

Getproductbycode(id: any): Observable<productmodel> {
  return this.http.get<productmodel>(this.apiurl + '/' + id);
}

Removeproductbycode(id: any) {
  return this.http.delete(this.apiurl + '/' + id);
}

Createproduct(productdata: any) {
  return this.http.post(this.apiurl, productdata);
}

Updateproduct(id: any, productdata: any) {
  return this.http.put(this.apiurl + '/' + id, productdata);
}


//Register

addregister(adddata:any)
{
  return this.http.post(this.regapiurl, adddata);
}


}