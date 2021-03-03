import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url:any) {
    return this.http.get(url)
  }
  
  post(url:any, data:any, isHeaderRequired:any = false, headers:any = null) {
    return this.http.post(url, data, isHeaderRequired && headers)
  }
}
