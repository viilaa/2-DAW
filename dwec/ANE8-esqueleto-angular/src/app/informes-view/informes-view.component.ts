import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informes-view',
  templateUrl: './informes-view.component.html',
  styleUrls: ['./informes-view.component.css']
})

export class InformesViewComponent implements OnInit{

  users = <any>[];

  constructor(private httpClient: HttpClient ) { }

  ngOnInit(): void {
    this.httpClient.get("https://jsonplaceholder.typicode.com/users").subscribe(
      response => {
        this.users = response;
        // console.log(this.users[0].name);
        this.users = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
              label: 'My Second dataset',
              backgroundColor: '#9CCC65',
              borderColor: '#7CB342',
              data: [55, 48, 40, 19, 86, 27, 90]
            }
          ]
        };
      }
    );
  }
}
