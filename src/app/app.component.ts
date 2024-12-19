import { Component } from '@angular/core';
import { ApiCallService } from './api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private getApi:ApiCallService){

  }
  postArray=[];
  message:string='helooo angularr';
  
   ngOnInit(){ 
    this.getApi.getPost().subscribe((res)=>{ debugger
      console.log(res);
      this.postArray=res;
      console.log(this.postArray);
    }) 
  }

}
