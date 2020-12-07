import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-app';

  constructor(private apiService: ApiService) {}

  uploadFileFunc = (event : any) => {
    let file = event['files'];
    console.log(file[0])
    let formDataObj = new FormData();
    formDataObj.append('resturants', file[0])
    console.log(formDataObj.getAll('resturants'))
    this.apiService.sendFileToBack(formDataObj).subscribe(res => {
      console.log(res);
    })
  }
}
