import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos-view',
  templateUrl: './productos-view.component.html',
  styleUrls: ['./productos-view.component.css']
})
export class ProductosViewComponent implements OnInit {

  users= <any>[];

  constructor(private httpClient: HttpClient ) { }

  ngOnInit(): void {
    this.httpClient.get("https://jsonplaceholder.typicode.com/users").subscribe(
      response => {
        this.users = response;   
        console.log(this.users);     
      }
    );
  }
}