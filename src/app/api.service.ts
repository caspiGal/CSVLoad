import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
      providedIn: 'root'
  })
export class ApiService { 

      constructor(private http: HttpClient) { }

      private url="http://localhost:3001";


      sendFileToBack = (myFormData: FormData) => {
            console.log(myFormData)
            return this.http.post(`${this.url}/api/get-file`, myFormData);
      }
}