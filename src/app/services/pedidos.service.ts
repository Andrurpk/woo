import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  uri="https://tresideas.com.ar/ecommerce/wp-json/wc/v1";
  url= this.uri + '/orders';
  consumer_key = 'ck_8cabea06c434ee1b1fe1c7efbe8be951145864b2';
  consumer_secret = 'cs_c1d0e681d4fc39b4b1304a0d89768f86354e021c';
  
  constructor(private http: HttpClient) { }

  get():Observable<any>{
    // Initialize Params Object
    let params = new HttpParams();
    // Begin assigning parameters (multiple)
    params = params.append('consumer_key', this.consumer_key);
    params = params.append('consumer_secret', this.consumer_secret);
    //  console.log(params);

    return this.http.get(this.url, { params: params });
  }

}

