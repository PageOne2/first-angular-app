import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http:HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('/api/getCsvs')
    /*try {
      const data = await fetch('http://localhost:3000/api/recipes')
      const res = await data.json()
      return res
    } catch(err) {
      alert('Something went wrong')
    }*/
  }
}
