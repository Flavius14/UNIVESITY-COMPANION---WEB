import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'UNIVESITY-COMPANION-WEB';

    constructor(private http: HttpClient) {

    }
    ngOnInit(): void {
      this.http.get("https://localhost:7098/Login").subscribe((result : any)=>{
        console.log(result);
      })
    }
}
