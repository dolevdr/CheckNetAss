import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // dates = {'Sunday,':'יום ראשון,', 'Monday,':'יום שני,', 'Tuesday,':'יום שלישי,','Wednesday,':'יום רביעי,','Thursday,':'יום חמישי,','Friday,':'יום שישי,', 'Saturday,':'יום שבת,'}
  // week = {0:'יום ראשון,', 1:'יום שני,', 2:'יום שלישי,',3:'יום רביעי,',4:'יום חמישי,',5:'יום שישי,', 6:'יום שבת,'}
  res :any;
  constructor(private http:HttpClient){}

  handleSubmit(input:string){
    this.http.post("http://localhost:3001/",{'lotteryID':input}).subscribe(x=>this.res = x);
    
  }
}
